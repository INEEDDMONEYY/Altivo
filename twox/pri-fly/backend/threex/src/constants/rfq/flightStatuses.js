/**
 * Flight Statuses
 */

export const FLIGHT_STATUS = Object.freeze({
  SCHEDULED: "scheduled",
  CREW_ASSIGNED: "crew_assigned",
  POSITIONING: "positioning",
  READY: "ready",
  DEPARTED: "departed",
  AIRBORNE: "airborne",
  LANDED: "landed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
});

export default FLIGHT_STATUS;