import apiClient from "../../../services/apiClient";
import type { ApiSuccessResponse } from "../../../types/api";
import type { Quote, SubmitQuotePayload } from "../types";

/**These talk to the backend, no axios inside components, Ever. */

export async function submitQuote(payload: SubmitQuotePayload): Promise<Quote> {
  const { data } = await apiClient.post<ApiSuccessResponse<Quote>>("/quotes", payload);
  return data.data;
}

export async function getQuoteById(id: string): Promise<Quote> {
  const { data } = await apiClient.get<ApiSuccessResponse<Quote>>(`/quotes/${id}`);
  return data.data;
}

export async function getQuotesForRFQ(rfqId: string): Promise<Quote[]> {
  const { data } = await apiClient.get<ApiSuccessResponse<Quote[]>>(`/quotes/rfq/${rfqId}`);
  return data.data;
}

export async function updateQuote(id: string, payload: Partial<SubmitQuotePayload>): Promise<Quote> {
  const { data } = await apiClient.patch<ApiSuccessResponse<Quote>>(`/quotes/${id}`, payload);
  return data.data;
}

export async function acceptQuote(id: string): Promise<Quote> {
  const { data } = await apiClient.patch<ApiSuccessResponse<Quote>>(`/quotes/${id}/accept`);
  return data.data;
}

export async function declineQuote(id: string): Promise<Quote> {
  const { data } = await apiClient.patch<ApiSuccessResponse<Quote>>(`/quotes/${id}/decline`);
  return data.data;
}
