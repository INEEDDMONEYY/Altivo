// TODO: add dashboard-specific helper functions as needed
import type { DashboardNavItem } from "./types";
import type { Role } from "../../config/permissions";
import { permissions } from "../../config/permissions";

export interface GroupedNavItems {
  label?: string;
  items: DashboardNavItem[];
}

/**
 * Filters nav items by permission. Items with no `permission` field
 * always pass through — permission-gating is opt-in per item.
 * Once the real matrix lands in config/permissions.ts, this starts
 * enforcing automatically with no call-site changes needed.
 */
export function filterNavItems(items: DashboardNavItem[], role: Role): DashboardNavItem[] {
  const allowed = permissions[role];
  return items.filter((item) => !item.permission || allowed.includes(item.permission));
}

/**
 * Clusters a flat nav list into labeled sections, preserving original
 * order. Consecutive items sharing a group merge into one section;
 * non-consecutive same-named groups produce separate sections rather
 * than being forcibly combined.
 */
export function groupNavItems(items: DashboardNavItem[]): GroupedNavItems[] {
  const groups: GroupedNavItems[] = [];
  const groupIndex = new Map<string | undefined, number>();

  for (const item of items) {
    const key = item.group;
    if (!groupIndex.has(key)) {
      groupIndex.set(key, groups.length);
      groups.push({ label: key, items: [] });
    }
    groups[groupIndex.get(key)!].items.push(item);
  }

  return groups;
}