import { useEffect, useState } from "react";
import type { Operator } from "../types";
import { getOperatorById } from "../api/operatorApi";

export function useOperator(id: string) {
  const [operator, setOperator] = useState<Operator | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getOperatorById(id).then((result) => {
      if (active) {
        setOperator(result);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [id]);

  return { operator, loading };
}
