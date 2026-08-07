import { FileText } from "lucide-react";

const rfqStatusBreakdown = [
  { label: "Quoted", value: 46, className: "bg-red-500" },
  { label: "Awaiting quotes", value: 28, className: "bg-gray-400" },
  { label: "Awarded", value: 26, className: "bg-red-300" },
];

const totalActiveRfqs = 128;

/** Sample figures until the analytics endpoint lands on the backend. */
export default function PlatformMetrics() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--text-muted)]">Active RFQs</p>
          <p className="mt-1 text-3xl font-bold text-[var(--text-primary)]">{totalActiveRfqs}</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/15 text-[var(--primary)]">
          <FileText size={20} />
        </span>
      </div>

      <div className="mt-5 flex h-2 w-full overflow-hidden rounded-full bg-[var(--surface-hover)]">
        {rfqStatusBreakdown.map((segment) => (
          <span key={segment.label} className={segment.className} style={{ width: `${segment.value}%` }} />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[var(--text-muted)]">
        {rfqStatusBreakdown.map((segment) => (
          <span key={segment.label} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${segment.className}`} />
            {segment.label} · {segment.value}%
          </span>
        ))}
      </div>
    </div>
  );
}
