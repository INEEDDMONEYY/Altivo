import type { DashboardNavItem } from "../types";
import { PERMISSIONS } from "../../../config/permissions";
import {
  LayoutDashboard,
  Map,
  Plane,
  Building2,
  FileText,
  BarChart3,
  Clock,
  Settings,
  Users,
} from "lucide-react";

export const adminNavigation: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Fleet Map", href: "/dashboard/fleet", icon: Map, permission: PERMISSIONS.AIRCRAFT_VIEW },
  { label: "Operators", href: "/dashboard/operators", icon: Building2, permission: PERMISSIONS.OPERATORS_VIEW },
  { label: "Aircraft", href: "/dashboard/aircraft", icon: Plane, permission: PERMISSIONS.AIRCRAFT_VIEW },
  { label: "RFQs", href: "/dashboard/rfqs", icon: FileText, permission: PERMISSIONS.RFQS_VIEW },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3, permission: PERMISSIONS.ANALYTICS_VIEW },
  { label: "SLA", href: "/dashboard/sla", icon: Clock, permission: PERMISSIONS.SLA_VIEW },
  { label: "Users", href: "/dashboard/users", icon: Users, permission: PERMISSIONS.USERS_MANAGE },
  { label: "Settings", href: "/dashboard/settings", icon: Settings, permission: PERMISSIONS.SETTINGS_VIEW },
];