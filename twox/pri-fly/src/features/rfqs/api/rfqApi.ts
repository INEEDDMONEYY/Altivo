import { isAxiosError } from "axios";

import apiClient from "../../../services/apiClient";
import type { ApiSuccessResponse } from "../../../types/api";
import type { RFQ, RFQListParams, CreateRFQPayload, RFQStatus } from "../types";

/**These talk to the backend, no axios inside components, Ever. */

export async function getRFQs(params: RFQListParams = {}): Promise<RFQ[]> {
  const { data } = await apiClient.get<ApiSuccessResponse<RFQ[]>>("/rfqs", { params });
  return data.data;
}

export async function getRFQById(id: string): Promise<RFQ | null> {
  try {
    const { data } = await apiClient.get<ApiSuccessResponse<RFQ>>(`/rfqs/${id}`);
    return data.data;
  } catch (err) {
    if (isAxiosError(err) && err.response?.status === 404) return null;
    throw err;
  }
}

export async function createRFQ(payload: CreateRFQPayload): Promise<RFQ> {
  const { data } = await apiClient.post<ApiSuccessResponse<RFQ>>("/rfqs", payload);
  return data.data;
}

export async function updateRFQ(id: string, payload: Partial<CreateRFQPayload>): Promise<RFQ> {
  const { data } = await apiClient.patch<ApiSuccessResponse<RFQ>>(`/rfqs/${id}`, payload);
  return data.data;
}

export async function updateRFQStatus(id: string, status: RFQStatus): Promise<RFQ> {
  const { data } = await apiClient.patch<ApiSuccessResponse<RFQ>>(`/rfqs/${id}/status`, { status });
  return data.data;
}

export async function archiveRFQ(id: string): Promise<RFQ> {
  const { data } = await apiClient.patch<ApiSuccessResponse<RFQ>>(`/rfqs/${id}/archive`);
  return data.data;
}
