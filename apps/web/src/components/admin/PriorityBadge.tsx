import type { EnrollmentPriority } from "@/types/enrollment";

export default function PriorityBadge({
  priority,
}: {
  priority: EnrollmentPriority;
}) {
  const styles: Record<EnrollmentPriority, string> = {
    high: "bg-red-500/10 text-red-400 border-red-500/20",
    medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    low: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${styles[priority]}`}
    >
      {priority.toUpperCase()}
    </span>
  );
}