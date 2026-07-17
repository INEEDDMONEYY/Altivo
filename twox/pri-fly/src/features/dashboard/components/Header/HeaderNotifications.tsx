import { Bell } from "lucide-react";

export default function HeaderNotifications() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    >
      <Bell size={20} />
    </button>
  );
}
