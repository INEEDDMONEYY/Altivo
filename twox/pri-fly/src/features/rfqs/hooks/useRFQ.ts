import { useEffect, useState } from "react";
import type { RFQ } from "../types";
import { getRFQById } from "../api/rfqApi";

export function useRFQ(id: string) {
  const [rfq, setRfq] = useState<RFQ | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getRFQById(id).then((result) => {
      if (active) {
        setRfq(result);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [id]);

  return { rfq, loading };
}
