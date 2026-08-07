/**
 * ============================================================================
 * Authentication & Identity Routes
 * ============================================================================
 *
 * Centralizes every endpoint used by the Identity & Organization module.
 *
 * Benefits:
 * • Prevents hardcoded route strings
 * • Easier API version upgrades
 * • Shared between routes, docs, tests and integrations
 * • Supports future v2 without changing business logic
 * */

export const API_PREFIX = "/api";
export const API_VERSION = "/v1";

export const API_BASE = `${API_PREFIX}${API_VERSION}`;

/* -------------------------------------------------------------------------- */
/* Authentication                                                              */
/* -------------------------------------------------------------------------- */

export const AUTH_ROUTES = {
  BASE: "/auth",

  REGISTER: "/register",
  LOGIN: "/login",
  LOGOUT: "/logout",

  REFRESH_TOKEN: "/refresh-token",

  VERIFY_EMAIL: "/verify-email",
  RESEND_VERIFICATION: "/resend-verification",

  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  CHANGE_PASSWORD: "/change-password",

  ME: "/me",

  SESSIONS: "/sessions",
  REVOKE_SESSION: "/sessions/:sessionId",
};

/* -------------------------------------------------------------------------- */
/* Users                                                                       */
/* -------------------------------------------------------------------------- */

export const USER_ROUTES = {
  BASE: "/users",

  LIST: "/",
  CREATE: "/",

  PROFILE: "/profile",

  GET_BY_ID: "/:userId",
  UPDATE: "/:userId",
  DELETE: "/:userId",

  ACTIVATE: "/:userId/activate",
  DEACTIVATE: "/:userId/deactivate",

  PREFERENCES: "/:userId/preferences",

  DEVICES: "/:userId/devices",
};

/* -------------------------------------------------------------------------- */
/* Organizations                                                               */
/* -------------------------------------------------------------------------- */

export const ORGANIZATION_ROUTES = {
  BASE: "/organizations",

  LIST: "/",
  CREATE: "/",

  GET_BY_ID: "/:organizationId",
  UPDATE: "/:organizationId",
  DELETE: "/:organizationId",

  SETTINGS: "/:organizationId/settings",

  MEMBERS: "/:organizationId/members",
  REMOVE_MEMBER: "/:organizationId/members/:userId",
};

/* -------------------------------------------------------------------------- */
/* Invitations                                                                 */
/* -------------------------------------------------------------------------- */

export const INVITATION_ROUTES = {
  BASE: "/invitations",

  CREATE: "/",

  LIST: "/",

  ACCEPT: "/accept/:token",
  DECLINE: "/decline/:token",

  CANCEL: "/:invitationId",

  RESEND: "/:invitationId/resend",
};

/* -------------------------------------------------------------------------- */
/* API Keys                                                                    */
/* -------------------------------------------------------------------------- */

export const API_KEY_ROUTES = {
  BASE: "/api-keys",

  LIST: "/",

  CREATE: "/",

  GET_BY_ID: "/:apiKeyId",

  REGENERATE: "/:apiKeyId/regenerate",

  REVOKE: "/:apiKeyId/revoke",
};

/* -------------------------------------------------------------------------- */
/* Full Versioned Route Helpers                                                */
/* -------------------------------------------------------------------------- */

export const ROUTES = {
  AUTH: `${API_BASE}${AUTH_ROUTES.BASE}`,
  USERS: `${API_BASE}${USER_ROUTES.BASE}`,
  ORGANIZATIONS: `${API_BASE}${ORGANIZATION_ROUTES.BASE}`,
  INVITATIONS: `${API_BASE}${INVITATION_ROUTES.BASE}`,
  API_KEYS: `${API_BASE}${API_KEY_ROUTES.BASE}`,
};

export default ROUTES;