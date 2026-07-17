import { useState } from "react";

// TODO: wire up to the RFQ search API once the backend is connected
export function useSearchRFQ() {
  const [query, setQuery] = useState("");

  return { query, setQuery };
}
