import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enrollment from "@/models/Enrollment";
import { enrollSchema } from "@/lib/validators/enroll";
import { normalizeEnrollment } from "@/lib/normalize-enrollment";
import { sendAdminEnrollmentEmail, sendUserThankYouEmail } from "@/lib/mail";
import { enrollRateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "127.0.0.1";

    try {
      const { success } = await enrollRateLimit.limit(`enroll:${ip}`);

      if (!success) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many submissions. Please try again later.",
          },
          { status: 429 }
        );
      }
    } catch (rateLimitError) {
      console.error("Rate limit check failed, continuing without blocking:", rateLimitError);
    }

    const body = await req.json();
    const parsed = enrollSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const normalized = normalizeEnrollment(parsed.data);

    await connectToDatabase();

    const enrollment = await Enrollment.create(normalized);

    let adminSent = false;
    let userSent = false;

    try {
      await sendAdminEnrollmentEmail(normalized);
      adminSent = true;
    } catch (error) {
      console.error("Admin email failed:", error);
    }

    try {
      await sendUserThankYouEmail(normalized);
      userSent = true;
    } catch (error) {
      console.error("User email failed:", error);
    }

    await Enrollment.findByIdAndUpdate(enrollment._id, {
      emailAdminSent: adminSent,
      emailUserSent: userSent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enrollment submitted successfully",
        id: enrollment._id.toString(),
        emailAdminSent: adminSent,
        emailUserSent: userSent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enrollment API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting the form",
      },
      { status: 500 }
    );
  }
}