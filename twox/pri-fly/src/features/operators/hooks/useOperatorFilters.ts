import { useState } from "react";

export interface OperatorFilters {
  search: string;
}

export function useOperatorFilters() {
  const [filters, setFilters] = useState<OperatorFilters>({ search: "" });

  return { filters, setFilters };
}
