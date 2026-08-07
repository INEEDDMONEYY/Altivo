import type { DashboardNavItem } from "../types";
import { PERMISSIONS } from "../../../config/permissions";
import { LayoutDashboard, FileText, DollarSign, Building2, Plane, BarChart3, Clock, Settings } from "lucide-react";

export const brokerNavigation: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "RFQs", href: "/dashboard/rfqs", icon: FileText, permission: PERMISSIONS.RFQS_VIEW },
  { label: "Quotes", href: "/dashboard/quotes", icon: DollarSign, permission: PERMISSIONS.QUOTES_VIEW },
  { label: "Operators", href: "/dashboard/operators", icon: Building2, permission: PERMISSIONS.OPERATORS_VIEW },
  { label: "Aircraft", href: "/dashboard/aircraft", icon: Plane, permission: PERMISSIONS.AIRCRAFT_VIEW },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3, permission: PERMISSIONS.ANALYTICS_VIEW },
  { label: "SLA", href: "/dashboard/sla", icon: Clock, permission: PERMISSIONS.SLA_VIEW },
  { label: "Settings", href: "/dashboard/settings", icon: Settings, permission: PERMISSIONS.SETTINGS_VIEW },
];
