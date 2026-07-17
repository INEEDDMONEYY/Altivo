type Status = "pending" | "active" | "success" | "warning" | "error";

interface StatusBadgeProps {
  status: Status;
  label?: string;
}

const statusClasses: Record<Status, string> = {
  pending: "bg-slate-100 text-slate-600",
  active: "bg-sky-100 text-sky-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  error: "bg-red-100 text-red-700",
};

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusClasses[status]}`}
    >
      {label ?? status}
    </span>
  );
}
