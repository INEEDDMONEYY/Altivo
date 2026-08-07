import { useState } from "react";

export interface MockFleetPosition {
  id: string;
  lat: number;
  lng: number;
}

// TODO: replace with real-time fleet position data once available
export function useMockFleetPositions() {
  const [positions] = useState<MockFleetPosition[]>([]);
  return { positions };
}
