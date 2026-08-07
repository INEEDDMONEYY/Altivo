import type { RFQStatus, RFQPriority, TripType, SourcingType } from "./types";

export const RFQ_STATUSES: { value: RFQStatus; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "submitted", label: "Submitted" },
  { value: "matching", label: "Matching" },
  { value: "awaiting_quotes", label: "Awaiting Quotes" },
  { value: "quoted", label: "Quoted" },
  { value: "awarded", label: "Awarded" },
  { value: "confirmed", label: "Confirmed" },
  { value: "in_flight", label: "In Flight" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "expired", label: "Expired" },
  { value: "rejected", label: "Rejected" },
];

export const ACTIVE_RFQ_STATUSES: RFQStatus[] = ["submitted", "matching", "awaiting_quotes", "quoted"];
export const CLOSED_RFQ_STATUSES: RFQStatus[] = ["completed", "cancelled", "expired", "rejected"];

export const RFQ_PRIORITIES: { value: RFQPriority; label: string }[] = [
  { value: "low", label: "Low" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
  { value: "aog", label: "AOG" },
];

export const TRIP_TYPES: { value: TripType; label: string }[] = [
  { value: "one_way", label: "One Way" },
  { value: "round_trip", label: "Round Trip" },
  { value: "multi_leg", label: "Multi-Leg" },
];

export const SOURCING_TYPES: { value: SourcingType; label: string }[] = [
  { value: "private", label: "Private" },
  { value: "preferred_operators", label: "Preferred Operators" },
  { value: "network", label: "Network" },
  { value: "marketplace", label: "Marketplace" },
];
