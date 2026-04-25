import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enrollment from "@/models/Enrollment";

const allowedPriorities = ["low", "medium", "high"] as const;

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const priority = body?.priority;

    if (!allowedPriorities.includes(priority)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid priority",
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const updated = await Enrollment.findByIdAndUpdate(
      id,
      {
        priority,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          message: "Enrollment not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error("Update enrollment priority error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update priority",
      },
      { status: 500 }
    );
  }
}