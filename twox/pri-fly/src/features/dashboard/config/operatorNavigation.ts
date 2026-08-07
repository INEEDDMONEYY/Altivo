import type { DashboardNavItem } from "../types";
import { PERMISSIONS } from "../../../config/permissions";
import {
  LayoutDashboard,
  FileText,
  DollarSign,
  Plane,
  CalendarClock,
  BarChart3,
  Clock,
  Settings,
  Route,
} from "lucide-react";

export const operatorNavigation: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "RFQs", href: "/dashboard/rfqs", icon: FileText, permission: PERMISSIONS.RFQS_VIEW },
  { label: "Quotes", href: "/dashboard/quotes", icon: DollarSign, permission: PERMISSIONS.QUOTES_VIEW },
  { label: "Fleet", href: "/dashboard/fleet", icon: Plane, permission: PERMISSIONS.AIRCRAFT_VIEW },
  { label: "Availability", href: "/dashboard/availability", icon: CalendarClock, permission: PERMISSIONS.AVAILABILITY_VIEW },
  { label: "Trips", href: "/dashboard/trips", icon: Route, permission: PERMISSIONS.RFQS_VIEW },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3, permission: PERMISSIONS.ANALYTICS_VIEW },
  { label: "SLA", href: "/dashboard/sla", icon: Clock, permission: PERMISSIONS.SLA_VIEW },
  { label: "Settings", href: "/dashboard/settings", icon: Settings, permission: PERMISSIONS.SETTINGS_VIEW },
];
