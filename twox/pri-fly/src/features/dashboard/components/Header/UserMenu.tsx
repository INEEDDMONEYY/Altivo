import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LogOut } from "lucide-react";

import { useAuthStore } from "../../../../store/authStore";

export default function UserMenu() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const initial = user?.email?.[0]?.toUpperCase() ?? "?";

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  async function handleLogout() {
    setOpen(false);
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
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

      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-48 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] py-1 shadow-[var(--shadow-lg)]">
          <div className="border-b border-[var(--border)] px-3 py-2 sm:hidden">
            <p className="truncate text-sm font-semibold text-[var(--text-primary)]">{user?.email ?? "Guest"}</p>
            <p className="text-xs capitalize text-[var(--text-muted)]">{user?.role?.toLowerCase() ?? ""}</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
          >
            <LogOut size={16} className="shrink-0" />
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
