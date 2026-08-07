import { useEffect, useState } from "react";
import type { RFQ } from "../../rfqs/types";
import { getRFQs } from "../../rfqs/api/rfqApi";

export function useRecentRFQs() {
  const [rfqs, setRfqs] = useState<RFQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getRFQs().then((result) => {
      if (active) {
        setRfqs(result);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { rfqs, loading };
}
