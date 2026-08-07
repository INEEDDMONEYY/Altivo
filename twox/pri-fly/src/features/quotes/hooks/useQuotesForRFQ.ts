import { useEffect, useState } from "react";
import type { Quote } from "../types";
import { getQuotesForRFQ } from "../api/quoteApi";

export function useQuotesForRFQ(rfqId: string) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getQuotesForRFQ(rfqId).then((result) => {
      if (active) {
        setQuotes(result);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [rfqId]);

  return { quotes, loading };
}
