import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  icon: LucideIcon;
}

export default function StatCard({ label, value, sublabel, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-muted)]">{label}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/15 text-[var(--primary)]">
          <Icon size={18} />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold text-[var(--text-primary)]">{value}</p>
      {sublabel && <p className="mt-1 text-xs text-[var(--text-muted)]">{sublabel}</p>}
    </div>
  );
}
