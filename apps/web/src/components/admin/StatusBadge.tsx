export default function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    contacted: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    qualified: "bg-green-500/10 text-green-400 border-green-500/20",
    closed: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${styles[status] || "bg-white/10 text-white"}`}
    >
      {status.toUpperCase()}
    </span>
  );
}