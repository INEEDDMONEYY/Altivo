import apiClient from "../../../services/apiClient";
import type { ApiSuccessResponse } from "../../../types/api";
import type { AircraftAvailability, AvailabilityCheckPayload, AvailabilityCheckResult } from "../types";

/**These talk to the backend, no axios inside components, Ever. */

export async function checkAvailability(
  payload: AvailabilityCheckPayload
): Promise<AvailabilityCheckResult> {
  const { data } = await apiClient.post<ApiSuccessResponse<AvailabilityCheckResult>>(
    "/availability/check",
    payload
  );
  return data.data;
}

export async function getAircraftAvailability(aircraftId: string): Promise<AircraftAvailability[]> {
  const { data } = await apiClient.get<ApiSuccessResponse<AircraftAvailability[]>>(
    `/availability/aircraft/${aircraftId}`
  );
  return data.data;
}

export async function getOperatorAvailability(operatorId: string): Promise<AircraftAvailability[]> {
  const { data } = await apiClient.get<ApiSuccessResponse<AircraftAvailability[]>>(
    `/availability/operators/${operatorId}`
  );
  return data.data;
}
