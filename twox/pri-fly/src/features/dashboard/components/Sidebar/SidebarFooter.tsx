import { LogOut } from "lucide-react";

interface SidebarFooterProps {
  collapsed?: boolean;
}

export default function SidebarFooter({ collapsed }: SidebarFooterProps) {
  return (
    <button
      type="button"
      title={collapsed ? "Log out" : undefined}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] ${
        collapsed ? "justify-center" : ""
      }`}
    >
      <LogOut size={18} className="shrink-0" />
      {!collapsed && "Log out"}
    </button>
  );
}
