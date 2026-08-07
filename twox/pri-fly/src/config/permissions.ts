// Must match the `role` enum on the backend's models/User.js exactly.
export type Role = "ADMIN" | "BROKER" | "OPERATOR" | "DISPATCHER" | "PILOT" | "USER";

/**
 * Permission strings referenced by `DashboardNavItem.permission` and
 * consumed by `filterNavItems()` in features/dashboard/utils.ts.
 * These are frontend-only route/UI gates — the backend is still the
 * source of truth and re-checks authorization on every request.
 */
export const PERMISSIONS = {
  RFQS_VIEW: "rfqs:view",
  RFQS_CREATE: "rfqs:create",
  RFQS_MANAGE: "rfqs:manage",
  QUOTES_VIEW: "quotes:view",
  QUOTES_MANAGE: "quotes:manage",
  OPERATORS_VIEW: "operators:view",
  OPERATORS_MANAGE: "operators:manage",
  AIRCRAFT_VIEW: "aircraft:view",
  AIRCRAFT_MANAGE: "aircraft:manage",
  AVAILABILITY_VIEW: "availability:view",
  AVAILABILITY_MANAGE: "availability:manage",
  ANALYTICS_VIEW: "analytics:view",
  SLA_VIEW: "sla:view",
  SETTINGS_VIEW: "settings:view",
  USERS_MANAGE: "users:manage",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

const ALL_PERMISSIONS: Permission[] = Object.values(PERMISSIONS);

// ADMIN always gets every permission; other roles opt into a subset below.
export const permissions: Record<Role, string[]> = {
  ADMIN: ALL_PERMISSIONS,
  BROKER: [
    PERMISSIONS.RFQS_VIEW,
    PERMISSIONS.RFQS_CREATE,
    PERMISSIONS.RFQS_MANAGE,
    PERMISSIONS.QUOTES_VIEW,
    PERMISSIONS.OPERATORS_VIEW,
    PERMISSIONS.AIRCRAFT_VIEW,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.SLA_VIEW,
    PERMISSIONS.SETTINGS_VIEW,
  ],
  OPERATOR: [
    PERMISSIONS.RFQS_VIEW,
    PERMISSIONS.QUOTES_VIEW,
    PERMISSIONS.QUOTES_MANAGE,
    PERMISSIONS.AIRCRAFT_VIEW,
    PERMISSIONS.AIRCRAFT_MANAGE,
    PERMISSIONS.AVAILABILITY_VIEW,
    PERMISSIONS.AVAILABILITY_MANAGE,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.SLA_VIEW,
    PERMISSIONS.SETTINGS_VIEW,
  ],
  DISPATCHER: [
    PERMISSIONS.RFQS_VIEW,
    PERMISSIONS.AIRCRAFT_VIEW,
    PERMISSIONS.AIRCRAFT_MANAGE,
    PERMISSIONS.AVAILABILITY_VIEW,
    PERMISSIONS.AVAILABILITY_MANAGE,
    PERMISSIONS.SETTINGS_VIEW,
  ],
  PILOT: [PERMISSIONS.AIRCRAFT_VIEW, PERMISSIONS.AVAILABILITY_VIEW, PERMISSIONS.SETTINGS_VIEW],
  USER: [PERMISSIONS.SETTINGS_VIEW],
};

/**
 * Post-login landing route per role. Every role shares the same dashboard
 * shell today — update this map as role-specific dashboard routes land.
 */
const ROLE_HOME_PATHS: Partial<Record<Role, string>> = {
  ADMIN: "/dashboard",
  BROKER: "/dashboard",
  OPERATOR: "/dashboard",
  DISPATCHER: "/dashboard",
  PILOT: "/dashboard",
  USER: "/dashboard",
};

export function getRoleHomePath(role?: Role): string {
  return (role && ROLE_HOME_PATHS[role]) || "/dashboard";
}
