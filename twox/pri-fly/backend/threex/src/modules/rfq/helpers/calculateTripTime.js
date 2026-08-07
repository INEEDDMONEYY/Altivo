import { calculateFlightHours } from "./calculateFlightHours.js";

const GROUND_TURNAROUND_MINUTES = 45;

/**
 * Estimate total trip time (flight hours + ground turnaround) for a route.
 */
export const calculateTripTime = (route) => {
  const flightHours = calculateFlightHours(route);
  const legCount = Array.isArray(route) ? route.length : 1;
  const turnaroundHours = ((legCount - 1) * GROUND_TURNAROUND_MINUTES) / 60;

  return flightHours + Math.max(turnaroundHours, 0);
};

export default calculateTripTime;
