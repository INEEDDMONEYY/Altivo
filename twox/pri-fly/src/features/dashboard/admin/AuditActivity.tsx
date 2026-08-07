const recentActivity = [
  { action: "Approved operator verification", actor: "System Admin", time: "5m ago" },
  { action: "RFQ #4821 escalated (SLA breach)", actor: "System", time: "22m ago" },
  { action: "New organization onboarded", actor: "System Admin", time: "1h ago" },
  { action: "Quote #1092 accepted", actor: "Broker", time: "3h ago" },
];

/** Sample rows until the audit-log endpoint lands on the backend. */
export default function AuditActivity() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h3 className="text-base font-semibold text-[var(--text-primary)]">Audit Activity</h3>
      <div className="mt-4 flex flex-col divide-y divide-[var(--border)]">
        {recentActivity.map((entry) => (
          <div key={entry.action} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0">
              <p className="truncate text-sm text-[var(--text-primary)]">{entry.action}</p>
              <p className="text-xs text-[var(--text-muted)]">{entry.actor}</p>
            </div>
            <span className="shrink-0 text-xs text-[var(--text-muted)]">{entry.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
