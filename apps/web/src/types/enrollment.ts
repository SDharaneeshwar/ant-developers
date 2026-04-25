export type EnrollmentStatus = "new" | "contacted" | "qualified" | "closed";
export type EnrollmentPriority = "low" | "medium" | "high";
export type FollowUpStatus = "pending" | "completed" | "overdue";

export type EnrollmentRecord = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  company: string;
  fromDate: string;
  toDate: string;
  noOfDays: string;
  budget: string;
  teamSize: string;
  location: string;
  trainingLocation: string;
  heardFrom: string;
  notes: string;
  status: EnrollmentStatus;
  priority: EnrollmentPriority;
  followUpDate: string;
  followUpStatus: FollowUpStatus;
  emailAdminSent: boolean;
  emailUserSent: boolean;
  createdAt: string;
  updatedAt: string;
};