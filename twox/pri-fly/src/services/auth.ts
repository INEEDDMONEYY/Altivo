import apiClient from "./apiClient";
import type { ApiSuccessResponse } from "../types/api";
import type {
  LoginPayload,
  RegisterPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  VerifyEmailPayload,
  LoginResponseData,
  RefreshResponseData,
  RegisterResponseData,
  UserProfile,
} from "../types/auth";

/**These talk to the backend, no axios inside components, Ever. */

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponseData> => {
  const { data } = await apiClient.post<ApiSuccessResponse<RegisterResponseData>>(
    "/auth/register",
    payload
  );
  return data.data;
};

export const login = async (
  payload: LoginPayload
): Promise<LoginResponseData> => {
  const { data } = await apiClient.post<ApiSuccessResponse<LoginResponseData>>(
    "/auth/login",
    payload
  );
  return data.data;
};

export const refreshToken = async (
  refreshTokenValue: string
): Promise<RefreshResponseData> => {
  const { data } = await apiClient.post<ApiSuccessResponse<RefreshResponseData>>(
    "/auth/refresh-token",
    { refreshToken: refreshTokenValue }
  );
  return data.data;
};

export const forgotPassword = async (
  payload: ForgotPasswordPayload
): Promise<void> => {
  await apiClient.post("/auth/forgot-password", payload);
};

export const resetPassword = async (
  payload: ResetPasswordPayload
): Promise<void> => {
  await apiClient.post("/auth/reset-password", payload);
};

export const verifyEmail = async (
  payload: VerifyEmailPayload
): Promise<void> => {
  await apiClient.post("/auth/verify-email", payload);
};

export const getMe = async (): Promise<UserProfile> => {
  const { data } = await apiClient.get<ApiSuccessResponse<UserProfile>>("/auth/me");
  return data.data;
};

export const logout = async (): Promise<void> => {
  await apiClient.post("/auth/logout");
};
