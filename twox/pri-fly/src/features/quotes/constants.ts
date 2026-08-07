import type { QuoteStatus } from "./types";

export const QUOTE_STATUSES: { value: QuoteStatus; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "submitted", label: "Submitted" },
  { value: "revised", label: "Revised" },
  { value: "accepted", label: "Accepted" },
  { value: "declined", label: "Declined" },
  { value: "withdrawn", label: "Withdrawn" },
  { value: "expired", label: "Expired" },
];
