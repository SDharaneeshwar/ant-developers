import type { EnrollmentRecord, FollowUpStatus } from "@/types/enrollment";

function normalizeDate(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function getLeadAgeLabel(createdAt: string) {
  const today = normalizeDate(new Date());
  const created = normalizeDate(new Date(createdAt));
  const diffMs = today.getTime() - created.getTime();
  const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day old";
  return `${diffDays} days old`;
}

export function getComputedFollowUpStatus(
  record: EnrollmentRecord
): FollowUpStatus {
  if (record.followUpStatus === "completed") return "completed";
  if (!record.followUpDate) return "pending";

  const today = normalizeDate(new Date());
  const followUp = normalizeDate(new Date(record.followUpDate));

  if (followUp.getTime() < today.getTime()) return "overdue";
  return "pending";
}

export function isDueToday(record: EnrollmentRecord) {
  if (!record.followUpDate) return false;
  if (record.followUpStatus === "completed") return false;

  const today = normalizeDate(new Date());
  const followUp = normalizeDate(new Date(record.followUpDate));
  return followUp.getTime() === today.getTime();
}

export function isOverdue(record: EnrollmentRecord) {
  return getComputedFollowUpStatus(record) === "overdue";
}