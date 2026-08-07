// Mirrors models/AircraftAvailability.js
export interface AircraftAvailability {
  id: string;
  aircraftId: string;
  startDate: string;
  endDate: string;
  available: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AvailabilityCheckPayload {
  aircraftId?: string;
  operatorId?: string;
  startDate: string;
  endDate: string;
}

export interface AvailabilityCheckResult {
  available: boolean;
  conflicts: AircraftAvailability[];
}
