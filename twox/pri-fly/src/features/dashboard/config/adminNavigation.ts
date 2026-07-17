import type { DashboardNavItem } from "../types";
import {
  LayoutDashboard,
  Map,
  Plane,
  Building2,
  FileText,
  BarChart3,
  Clock,
  Settings,
} from "lucide-react";

export const adminNavigation: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Fleet Map", href: "/dashboard/fleet", icon: Map },
  { label: "Operators", href: "/dashboard/operators", icon: Building2 },
  { label: "Aircraft", href: "/dashboard/aircraft", icon: Plane },
  { label: "RFQs", href: "/dashboard/rfqs", icon: FileText },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "SLA", href: "/dashboard/sla", icon: Clock },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];