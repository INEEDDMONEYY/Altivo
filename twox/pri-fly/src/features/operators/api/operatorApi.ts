import { isAxiosError } from "axios";

import apiClient from "../../../services/apiClient";
import type { ApiSuccessResponse } from "../../../types/api";
import type { Operator, OperatorListParams } from "../types";

/**These talk to the backend, no axios inside components, Ever. */

// NOTE: /api/v1/operators is stubbed on the backend (no handlers yet) —
// these calls are wired ahead of that landing, per the module's REST shape.
export async function getOperators(params: OperatorListParams = {}): Promise<Operator[]> {
  try {
    const { data } = await apiClient.get<ApiSuccessResponse<Operator[]>>("/operators", { params });
    return data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response?.status === 404) return [];
    throw err;
  }
}

export async function getOperatorById(id: string): Promise<Operator | null> {
  try {
    const { data } = await apiClient.get<ApiSuccessResponse<Operator>>(`/operators/${id}`);
    return data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response?.status === 404) return null;
    throw err;
  }
}
