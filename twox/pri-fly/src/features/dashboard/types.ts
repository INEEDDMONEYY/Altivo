import type { LucideIcon } from "lucide-react";

export interface DashboardNavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  group?: string;
  permission?: string;
}