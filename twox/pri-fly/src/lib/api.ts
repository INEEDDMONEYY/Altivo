import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { env } from "../config/env";
import { useAuthStore } from "../store/authStore";

/**
 * Every endpoint wraps its payload as `{ status, message, data, meta? }`
 * (see the backend's utils/response.js). The response interceptor below
 * unwraps `data` automatically so callers can treat `res.data` as the real
 * payload directly.
 */
interface ApiEnvelope<T> {
  status: "success";
  message: string;
  data: T;
  meta?: unknown;
}

export const api = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

let refreshPromise: Promise<string | null> | null = null;

// This bypasses the `api` instance (and its interceptors) on purpose, to
// avoid a recursive refresh loop, so the envelope is unwrapped manually here.
async function refreshAccessToken(): Promise<string | null> {
  const { refreshToken } = useAuthStore.getState();
  if (!refreshToken) {
    useAuthStore.getState().clearSession();
    return null;
  }

  try {
    const { data } = await axios.post<ApiEnvelope<{ accessToken: string }>>(
      `${env.apiBaseUrl}/auth/refresh-token`,
      { refreshToken },
      { withCredentials: true }
    );
    useAuthStore.getState().setAccessToken(data.data.accessToken);
    return data.data.accessToken;
  } catch {
    useAuthStore.getState().clearSession();
    return null;
  }
}

type RetriableConfig = InternalAxiosRequestConfig & { _retry?: boolean };

api.interceptors.response.use(
  (response) => {
    if (response.data && typeof response.data === "object" && "data" in response.data) {
      response.data = (response.data as ApiEnvelope<unknown>).data;
    }
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as RetriableConfig | undefined;
    const isAuthEndpoint =
      originalRequest?.url?.includes("/auth/login") ||
      originalRequest?.url?.includes("/auth/refresh-token");

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true;

      refreshPromise ??= refreshAccessToken().finally(() => {
        refreshPromise = null;
      });

      const newAccessToken = await refreshPromise;
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
