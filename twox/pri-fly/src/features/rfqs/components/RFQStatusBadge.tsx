import type { RFQStatus } from "../types";

interface RFQStatusBadgeProps {
  status: RFQStatus;
}

const statusClasses: Record<RFQStatus, string> = {
  draft: "bg-slate-100 text-slate-600",
  pending: "bg-amber-100 text-amber-700",
  quoted: "bg-sky-100 text-sky-700",
  accepted: "bg-emerald-100 text-emerald-700",
  declined: "bg-red-100 text-red-700",
};

export default function RFQStatusBadge({ status }: RFQStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
}
