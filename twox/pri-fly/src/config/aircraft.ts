// Must match the backend's constants/rfq/cabinClasses.js and constants/aircraft/statuses.js exactly.
export type CabinClass =
  | "piston"
  | "turboprop"
  | "very_light_jet"
  | "light_jet"
  | "midsize_jet"
  | "super_midsize"
  | "heavy_jet"
  | "ultra_long_range"
  | "vip_airliner"
  | "helicopter";

export const CABIN_CLASSES: { value: CabinClass; label: string }[] = [
  { value: "piston", label: "Piston" },
  { value: "turboprop", label: "Turboprop" },
  { value: "very_light_jet", label: "Very Light Jet" },
  { value: "light_jet", label: "Light Jet" },
  { value: "midsize_jet", label: "Midsize Jet" },
  { value: "super_midsize", label: "Super Midsize" },
  { value: "heavy_jet", label: "Heavy Jet" },
  { value: "ultra_long_range", label: "Ultra Long Range" },
  { value: "vip_airliner", label: "VIP Airliner" },
  { value: "helicopter", label: "Helicopter" },
];

export type AircraftStatus = "active" | "inactive" | "maintenance" | "retired";

export const AIRCRAFT_STATUSES: { value: AircraftStatus; label: string }[] = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "maintenance", label: "Maintenance" },
  { value: "retired", label: "Retired" },
];
