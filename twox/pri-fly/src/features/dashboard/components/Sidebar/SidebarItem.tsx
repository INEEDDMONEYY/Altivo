import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  label: string;
  href: string;
  icon?: LucideIcon;
  collapsed?: boolean;
}

export default function SidebarItem({ label, href, icon: Icon, collapsed }: SidebarItemProps) {
  return (
    <NavLink
      to={href}
      end
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition-colors ${
          collapsed ? "justify-center" : ""
        } ${
          isActive
            ? "bg-[var(--primary)]/15 text-[var(--primary)]"
            : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
        }`
      }
    >
      {Icon && <Icon size={18} className="shrink-0" />}
      {!collapsed && label}
    </NavLink>
  );
}