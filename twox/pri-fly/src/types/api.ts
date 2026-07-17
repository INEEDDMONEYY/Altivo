/**
 * Generic API envelope types matching the backend's utils/response.js
 * and middleware/errorHandler.js output shapes.
 * Never duplicate interfaces
 */

export interface ApiSuccessResponse<T = null> {
  status: "success";
  message: string;
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  status: "error";
  message: string;
  details?: Array<{ field: string; message: string }>;
}
