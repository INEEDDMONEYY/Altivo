export type FleetStatus = "en-route" | "boarding" | "grounded" | "maintenance";

export interface FleetPosition {
  aircraftId: string;
  registration: string;
  latitude: number;
  longitude: number;
  heading: number;
  altitude: number;
  speed: number;
  status: FleetStatus;
  lastUpdated: string;
}