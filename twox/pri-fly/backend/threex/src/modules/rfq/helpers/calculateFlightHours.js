const DEFAULT_CRUISE_SPEED_KTS = 450;

/**
 * Estimate total flight hours for a route.
 * Accepts a number (already hours), a single leg { distanceNm, cruiseSpeedKts },
 * or an array of legs.
 */
export const calculateFlightHours = (route) => {
  if (typeof route === "number") {
    return route;
  }

  const legs = Array.isArray(route) ? route : [route].filter(Boolean);

  return legs.reduce((total, leg) => {
    const distanceNm = leg?.distanceNm || 0;
    const speedKts = leg?.cruiseSpeedKts || DEFAULT_CRUISE_SPEED_KTS;

    return total + distanceNm / speedKts;
  }, 0);
};

export default calculateFlightHours;
