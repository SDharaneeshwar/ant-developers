import type { EnrollFormData } from "@/lib/validators/enroll";

export function normalizeEnrollment(data: EnrollFormData): EnrollFormData {
  return {
    ...data,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    course: data.course.trim(),
    company: data.company.trim(),
    fromDate: data.fromDate.trim(),
    toDate: data.toDate.trim(),
    noOfDays: data.noOfDays?.trim() || "",
    budget: data.budget?.trim() || "",
    teamSize: data.teamSize?.trim() || "",
    location: data.location.trim(),
    trainingLocation: data.trainingLocation.trim(),
    heardFrom: data.heardFrom?.trim() || "",
    notes: data.notes?.trim() || "",
  };
}