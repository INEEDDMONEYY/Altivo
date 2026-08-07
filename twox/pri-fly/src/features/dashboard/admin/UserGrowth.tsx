const recentUsers = [
  { name: "Alisa Snow", role: "Broker", initial: "A" },
  { name: "Karl Coleman", role: "Operator", initial: "K" },
  { name: "William Cooper", role: "Broker", initial: "W" },
  { name: "Erick Snow", role: "Operator", initial: "E" },
];

/** Sample list until the users/organizations endpoints land on the backend. */
export default function UserGrowth() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h3 className="text-base font-semibold text-[var(--text-primary)]">Recently Joined</h3>
      <div className="mt-4 flex flex-col gap-3">
        {recentUsers.map((user) => (
          <div key={user.name} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-gray-500 text-sm font-semibold text-white">
              {user.initial}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[var(--text-primary)]">{user.name}</p>
              <p className="text-xs text-[var(--text-muted)]">{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
