import { useState } from "react";
import type { RFQ } from "../types";
import { createRFQ } from "../api/rfqApi";

export function useCreateRFQ() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (payload: Partial<RFQ>) => {
    setSubmitting(true);
    setError(null);
    try {
      return await createRFQ(payload);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create RFQ");
      return null;
    } finally {
      setSubmitting(false);
    }
  };

  return { submit, submitting, error };
}
