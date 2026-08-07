// Must match the backend's constants/rfq/quoteStatuses.js exactly.
export type QuoteStatus =
  | "pending"
  | "submitted"
  | "revised"
  | "accepted"
  | "declined"
  | "withdrawn"
  | "expired";

// Mirrors models/Quote.js
export interface Quote {
  id: string;
  rfqId: string;
  operatorId: string;
  organizationId?: string;
  aircraftId?: string;
  price: number;
  currency: string;
  status: QuoteStatus;
  submittedAt: string;
  acceptedAt?: string;
  rejectedAt?: string;
  archived: boolean;
  archivedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Mirrors models/QuoteRevision.js
export interface QuoteRevision {
  id: string;
  quoteId: string;
  price: number;
  currency: string;
  notes?: string;
  createdBy?: string;
  createdAt: string;
}

export interface SubmitQuotePayload {
  rfqId: string;
  aircraftId?: string;
  price: number;
  currency?: string;
}
