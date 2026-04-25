import nodemailer from "nodemailer";
import type { EnrollFormData } from "@/lib/validators/enroll";
import { getEnv } from "@/lib/env";

const transporter = nodemailer.createTransport({
  host: getEnv("SMTP_HOST"),
  port: Number(getEnv("SMTP_PORT")),
  secure: false,
  auth: {
    user: getEnv("SMTP_USER"),
    pass: getEnv("SMTP_PASS"),
  },
});

export async function sendAdminEnrollmentEmail(data: EnrollFormData) {
  const to = getEnv("ADMIN_NOTIFY_EMAIL");

  await transporter.sendMail({
    from: getEnv("MAIL_FROM"),
    to,
    subject: `New Enrollment - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Enrollment Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Course:</strong> ${data.course}</p>
        <p><strong>Company / Institution:</strong> ${data.company}</p>
        <p><strong>From Date:</strong> ${data.fromDate}</p>
        <p><strong>To Date:</strong> ${data.toDate}</p>
        <p><strong>No. of Days:</strong> ${data.noOfDays || "-"}</p>
        <p><strong>Budget:</strong> ${data.budget || "-"}</p>
        <p><strong>Team Size:</strong> ${data.teamSize || "-"}</p>
        <p><strong>Your Location:</strong> ${data.location}</p>
        <p><strong>Training Location:</strong> ${data.trainingLocation}</p>
        <p><strong>How did you hear us:</strong> ${data.heardFrom || "-"}</p>
        <p><strong>Notes:</strong> ${data.notes || "-"}</p>
      </div>
    `,
  });
}

export async function sendUserThankYouEmail(data: EnrollFormData) {
  await transporter.sendMail({
    from: getEnv("MAIL_FROM"),
    to: data.email,
    subject: "Thank you for reaching ANT Developers",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.7;">
        <h2>Thank you for reaching us</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for contacting <strong>ANT Developers</strong>.</p>
        <p>We have received your training enquiry and our team will contact you soon.</p>
        <p><strong>Selected Course:</strong> ${data.course}</p>
        <p><strong>Training Location:</strong> ${data.trainingLocation}</p>
        <p>We appreciate your interest in our premium training programs.</p>
        <br />
        <p>Regards,</p>
        <p><strong>ANT Developers</strong></p>
      </div>
    `,
  });
}