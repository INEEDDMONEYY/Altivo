import { useState } from "react";
import type { RFQStatus } from "../types";

export interface RFQFilters {
  status?: RFQStatus;
  search: string;
}

export function useRFQFilters() {
  const [filters, setFilters] = useState<RFQFilters>({ search: "" });

  return { filters, setFilters };
}
