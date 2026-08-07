import { Plane } from "lucide-react";

const availablePercent = 72;

/** Sample figure until the availability endpoint is wired to this widget. */
export default function FleetAvailability() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--text-muted)]">Fleet Available Today</p>
          <p className="mt-1 text-3xl font-bold text-[var(--text-primary)]">{availablePercent}%</p>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/15 text-[var(--primary)]">
          <Plane size={20} />
        </span>
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-[var(--surface-hover)]">
        <div className="h-full rounded-full bg-gradient-to-r from-red-400 to-gray-500" style={{ width: `${availablePercent}%` }} />
      </div>
      <p className="mt-3 text-xs text-[var(--text-muted)]">18 of 25 aircraft available for new bookings</p>
    </div>
  );
}
