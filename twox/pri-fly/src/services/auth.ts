/** These talk to the backend, no axios inside components, Ever. */
import { api } from "../lib/api";
import type {
  AuthResponse,
  LoginCredentials,
  RegisterPayload,
  RegisterResponse,
  User,
} from "../types/auth";

// Endpoint paths mirror the backend's constants/auth/routes.js exactly.

export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>("/auth/login", credentials);
  return data;
}

// Registration only creates the account — no session is returned, so the
// caller should route to /login afterwards rather than expecting tokens.
export async function register(payload: RegisterPayload): Promise<RegisterResponse> {
  const { data } = await api.post<RegisterResponse>("/auth/register", payload);
  return data;
}

export async function logout(): Promise<void> {
  await api.post("/auth/logout");
}

// The backend reads the refresh token from the request body (`req.body.refreshToken`),
// not a cookie, so it must be passed in explicitly.
export async function refreshSession(refreshToken: string): Promise<{ accessToken: string }> {
  const { data } = await api.post<{ accessToken: string }>("/auth/refresh-token", {
    refreshToken,
  });
  return data;
}

export async function getCurrentUser(): Promise<User> {
  const { data } = await api.get<User>("/auth/me");
  return data;
}
