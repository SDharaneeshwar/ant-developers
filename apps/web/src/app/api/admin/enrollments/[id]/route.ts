import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enrollment from "@/models/Enrollment";

const allowedStatuses = ["new", "contacted", "qualified", "closed"];
const allowedPriorities = ["low", "medium", "high"];
const allowedFollowUpStatuses = ["pending", "completed", "overdue"];

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const updateData: Record<string, string> = {};

    if (body?.status) {
      if (!allowedStatuses.includes(body.status)) {
        return NextResponse.json(
          { success: false, message: "Invalid status" },
          { status: 400 }
        );
      }
      updateData.status = body.status;
    }

    if (body?.priority) {
      if (!allowedPriorities.includes(body.priority)) {
        return NextResponse.json(
          { success: false, message: "Invalid priority" },
          { status: 400 }
        );
      }
      updateData.priority = body.priority;
    }

    if (typeof body?.notes === "string") {
      updateData.notes = body.notes;
    }

    if (typeof body?.followUpDate === "string") {
      updateData.followUpDate = body.followUpDate;
    }

    if (body?.followUpStatus) {
      if (!allowedFollowUpStatuses.includes(body.followUpStatus)) {
        return NextResponse.json(
          { success: false, message: "Invalid follow-up status" },
          { status: 400 }
        );
      }
      updateData.followUpStatus = body.followUpStatus;
    }

    await connectToDatabase();

    const updated = await Enrollment.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Enrollment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    console.error("Update enrollment error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to update enrollment" },
      { status: 500 }
    );
  }
}