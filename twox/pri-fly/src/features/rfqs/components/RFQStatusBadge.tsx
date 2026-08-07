import type { RFQStatus } from "../types";

interface RFQStatusBadgeProps {
  status: RFQStatus;
}

const statusClasses: Record<RFQStatus, string> = {
  draft: "bg-slate-100 text-slate-600",
  submitted: "bg-blue-100 text-blue-700",
  matching: "bg-indigo-100 text-indigo-700",
  awaiting_quotes: "bg-amber-100 text-amber-700",
  quoted: "bg-sky-100 text-sky-700",
  awarded: "bg-emerald-100 text-emerald-700",
  confirmed: "bg-teal-100 text-teal-700",
  in_flight: "bg-cyan-100 text-cyan-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  expired: "bg-zinc-100 text-zinc-600",
  rejected: "bg-rose-100 text-rose-700",
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
