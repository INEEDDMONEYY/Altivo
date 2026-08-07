// Must match the backend's constants/rfq/sla.js exactly (all values in minutes).
export const SLA_THRESHOLDS_MINUTES = {
  RESPONSE_REMINDER: 15,
  RESPONSE_TARGET: 30,
  BROKER_ALERT: 45,
  ESCALATION: 60,
} as const;

export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 25,
} as const;

export const DEFAULT_CURRENCY = "USD";
