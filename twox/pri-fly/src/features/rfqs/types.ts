import type { CabinClass } from "../../config/aircraft";

// Must match the backend's constants/rfq/*.js exactly.
export type RFQStatus =
  | "draft"
  | "submitted"
  | "matching"
  | "awaiting_quotes"
  | "quoted"
  | "awarded"
  | "confirmed"
  | "in_flight"
  | "completed"
  | "cancelled"
  | "expired"
  | "rejected";

export type RFQPriority = "low" | "normal" | "high" | "urgent" | "aog";
export type TripType = "one_way" | "round_trip" | "multi_leg";
export type SourcingType = "private" | "preferred_operators" | "network" | "marketplace";

// Mirrors models/schemas/RFQLeg.schema.js
export interface RFQLeg {
  departureAirport: string;
  arrivalAirport: string;
  departureDate: string;
  departureTimeWindow?: { start?: string; end?: string };
  isDateFlexible?: boolean;
  sequence: number;
  notes?: string;
}

// Mirrors models/schemas/RFQPassenger.schema.js
export interface RFQPassengerDetails {
  passengerCount: number;
  passengers?: Array<{
    firstName?: string;
    lastName?: string;
    type?: "adult" | "child" | "infant";
    notes?: string;
  }>;
  specialRequirements?: string[];
  pets?: { hasPets: boolean; count?: number };
  luggageNotes?: string;
}

// Mirrors models/schemas/RFQPreference.schema.js
export interface RFQPreferences {
  tripType: TripType;
  aircraftCategories?: string[];
  preferredAircraft?: string[];
  cabinClass?: CabinClass;
  allowAlternativeAircraft?: boolean;
  allowNearbyAirports?: boolean;
  amenities?: {
    wifi?: boolean;
    catering?: boolean;
    petsAllowed?: boolean;
    smokingAllowed?: boolean;
  };
  specialRequests?: string;
}

export interface RFQSlaEvent {
  event: string;
  occurredAt: string;
  meta?: unknown;
}

export interface RFQ {
  id: string;
  brokerId: string;
  organizationId: string;
  legs: RFQLeg[];
  tripType: TripType;
  sourcingType: SourcingType;
  priority: RFQPriority;
  cabinClass?: CabinClass;
  passengerCount: number;
  status: RFQStatus;
  matchedOperators: string[];
  slaEvents: RFQSlaEvent[];
  notes?: string;
  archived: boolean;
  archivedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRFQPayload {
  legs: RFQLeg[];
  tripType: TripType;
  sourcingType?: SourcingType;
  priority?: RFQPriority;
  cabinClass?: CabinClass;
  passengerCount: number;
  notes?: string;
}

export interface RFQListParams {
  page?: number;
  limit?: number;
  status?: RFQStatus;
}

export interface RFQListMeta {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

