import type { EnrollmentRecord } from "@/types/enrollment";

function escapeCsvValue(value: string | number | boolean | null | undefined) {
  const stringValue = String(value ?? "");
  const escaped = stringValue.replace(/"/g, '""');
  return `"${escaped}"`;
}

export function exportEnrollmentsCsv(records: EnrollmentRecord[]) {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Course",
    "Company",
    "From Date",
    "To Date",
    "No Of Days",
    "Budget",
    "Team Size",
    "Location",
    "Training Location",
    "Heard From",
    "Notes",
    "Status",
    "Admin Email Sent",
    "User Email Sent",
    "Created At",
  ];

  const rows = records.map((record) => [
    record.name,
    record.email,
    record.phone,
    record.course,
    record.company,
    record.fromDate,
    record.toDate,
    record.noOfDays,
    record.budget,
    record.teamSize,
    record.location,
    record.trainingLocation,
    record.heardFrom,
    record.notes,
    record.status,
    record.emailAdminSent ? "Yes" : "No",
    record.emailUserSent ? "Yes" : "No",
    record.createdAt,
  ]);

  const csvContent = [
    headers.map(escapeCsvValue).join(","),
    ...rows.map((row) => row.map(escapeCsvValue).join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `enrollments-${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}