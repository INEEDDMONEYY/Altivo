/**
 * RFQ Lifecycle Statuses
 * Shared across the backend and frontend.
 */

export const RFQ_STATUS = Object.freeze({
  DRAFT: "draft",
  SUBMITTED: "submitted",
  MATCHING: "matching",
  AWAITING_QUOTES: "awaiting_quotes",
  QUOTED: "quoted",
  AWARDED: "awarded",
  CONFIRMED: "confirmed",
  IN_FLIGHT: "in_flight",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  EXPIRED: "expired",
  REJECTED: "rejected",
});

export const ACTIVE_RFQ_STATUSES = Object.freeze([
  RFQ_STATUS.SUBMITTED,
  RFQ_STATUS.MATCHING,
  RFQ_STATUS.AWAITING_QUOTES,
  RFQ_STATUS.QUOTED,
]);

export const CLOSED_RFQ_STATUSES = Object.freeze([
  RFQ_STATUS.COMPLETED,
  RFQ_STATUS.CANCELLED,
  RFQ_STATUS.EXPIRED,
  RFQ_STATUS.REJECTED,
]);

export default RFQ_STATUS;