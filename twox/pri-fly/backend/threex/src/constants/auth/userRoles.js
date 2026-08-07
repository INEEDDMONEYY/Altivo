/**
 * System-level user roles.
 * Single source of truth — referenced by the User model enum, role
 * validation schemas, and the authorize() middleware.
 */
export const USER_ROLES = Object.freeze({
  ADMIN: "ADMIN",
  BROKER: "BROKER",
  OPERATOR: "OPERATOR",
  DISPATCHER: "DISPATCHER",
  PILOT: "PILOT",
  USER: "USER",
});

export const USER_ROLE_VALUES = Object.values(USER_ROLES);

export default USER_ROLES;
