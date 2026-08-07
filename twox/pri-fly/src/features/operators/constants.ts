import type { OperatorStatus } from "./types";

export const OPERATOR_STATUSES: { value: OperatorStatus; label: string }[] = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
  { value: "pending_verification", label: "Pending Verification" },
];
