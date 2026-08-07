import { ChevronDown } from "lucide-react";

import { useAuthStore } from "../../../../store/authStore";

export default function UserMenu() {
  const user = useAuthStore((state) => state.user);
  const initial = user?.email?.[0]?.toUpperCase() ?? "?";

  return (
    <button
      type="button"
      className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm hover:bg-[var(--surface-hover)]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-gray-500 text-sm font-semibold text-white">
        {initial}
      </span>
      <span className="hidden flex-col items-start leading-tight sm:flex">
        <span className="font-semibold text-[var(--text-primary)]">{user?.email ?? "Guest"}</span>
        <span className="text-xs capitalize text-[var(--text-muted)]">
          {user?.role?.toLowerCase() ?? ""}
        </span>
      </span>
      <ChevronDown size={14} className="hidden text-[var(--text-muted)] sm:block" />
    </button>
  );
}
