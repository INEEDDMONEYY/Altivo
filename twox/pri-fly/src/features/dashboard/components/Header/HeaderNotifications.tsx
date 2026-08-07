import { Bell } from "lucide-react";

export default function HeaderNotifications() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
    >
      <Bell size={20} />
      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
}
