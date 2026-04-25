import { CheckCircle, XCircle } from "lucide-react";

export default function EmailStatus({
  adminSent,
  userSent,
}: {
  adminSent: boolean;
  userSent: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-xs">
        {adminSent ? (
          <CheckCircle className="h-4 w-4 text-green-400" />
        ) : (
          <XCircle className="h-4 w-4 text-red-400" />
        )}
        <span>Admin</span>
      </div>

      <div className="flex items-center gap-1 text-xs">
        {userSent ? (
          <CheckCircle className="h-4 w-4 text-green-400" />
        ) : (
          <XCircle className="h-4 w-4 text-red-400" />
        )}
        <span>User</span>
      </div>
    </div>
  );
}