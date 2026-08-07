import { useState } from "react";
import SidebarGroup from "./SidebarGroup";
import SidebarCollapse from "./SidebarCollapse";
import AltivoIcon from "../../../../assets/icons/altivo-logo-icon.png";
import { useAuthStore } from "../../../../store/authStore";
import { adminNavigation } from "../../config/adminNavigation";
import { brokerNavigation } from "../../config/brokerNavigation";
import { operatorNavigation } from "../../config/operatorNavigation";
import { groupNavItems, filterNavItems } from "../../utils";
import type { DashboardNavItem } from "../../types";
import type { Role } from "../../../../config/permissions";

// Roles without a dedicated dashboard yet (DISPATCHER, PILOT, USER) fall
// back to the admin navigation until those areas are built.
const NAVIGATION_BY_ROLE: Partial<Record<Role, DashboardNavItem[]>> = {
  ADMIN: adminNavigation,
  BROKER: brokerNavigation,
  OPERATOR: operatorNavigation,
};

interface DashboardSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function DashboardSidebar({ mobileOpen = false, onCloseMobile }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const user = useAuthStore((s) => s.user);

  // Guards already guarantee `user` exists by the time this renders
  // (AdminRoute/BrokerRoute/OperatorRoute redirect otherwise), so this
  // fallback should never actually trigger in practice.
  const role = user?.role ?? "OPERATOR";
  const navigation = NAVIGATION_BY_ROLE[role] ?? adminNavigation;

  const visibleItems = filterNavItems(navigation, role);
  const groups = groupNavItems(visibleItems);

  return (
    <>
      {/* Backdrop — mobile only, closes the drawer on tap outside */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen shrink-0 flex-col border-r border-[var(--border)] bg-[var(--surface)] transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "w-20" : "w-64"}`}
      >
        <div
          className={`flex items-center px-4 py-5 ${
            collapsed ? "flex-col gap-3" : "gap-2.5"
          }`}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-gray-500">
            <img src={AltivoIcon} alt="Altivo" className="h-5 w-5" />
          </div>
          {!collapsed && <span className="text-lg font-bold text-[var(--text-primary)]">Altivo</span>}
          <SidebarCollapse collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-3">
          {groups.map((group, i) => (
            <SidebarGroup
              key={i}
              label={group.label}
              items={group.items}
              collapsed={collapsed}
              onNavigate={onCloseMobile}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}