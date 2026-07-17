import { useState } from "react";
import SidebarGroup from "./SidebarGroup";
import SidebarCollapse from "./SidebarCollapse";
import SidebarFooter from "./SidebarFooter";
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

export default function DashboardSidebar() {
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
    <aside
      className={`flex h-screen flex-col border-r border-[var(--border)] bg-[var(--surface)] transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5">
        {!collapsed && <span className="text-lg font-bold text-[var(--text-primary)]">Altivo</span>}
        <SidebarCollapse collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto px-3">
        {groups.map((group, i) => (
          <SidebarGroup key={i} label={group.label} items={group.items} collapsed={collapsed} />
        ))}
      </nav>

      <SidebarFooter collapsed={collapsed} />
    </aside>
  );
}