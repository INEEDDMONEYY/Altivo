// Must match the `role` enum on the backend's models/User.js exactly.
export type Role = "ADMIN" | "BROKER" | "OPERATOR" | "DISPATCHER" | "PILOT" | "USER";

// TODO: define the real permission matrix once backend roles are finalized
export const permissions: Record<Role, string[]> = {
  ADMIN: [],
  BROKER: [],
  OPERATOR: [],
  DISPATCHER: [],
  PILOT: [],
  USER: [],
};
