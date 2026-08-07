import { useEffect, useState } from "react";
import type { AircraftAvailability } from "../types";
import { getAircraftAvailability } from "../api/availabilityApi";

export function useAircraftAvailability(aircraftId: string) {
  const [availability, setAvailability] = useState<AircraftAvailability[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getAircraftAvailability(aircraftId).then((result) => {
      if (active) {
        setAvailability(result);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [aircraftId]);

  return { availability, loading };
}
