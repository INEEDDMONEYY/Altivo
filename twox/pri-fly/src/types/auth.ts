/**
 * Auth-related types shared across the app.
 * Mirrors the backend's User model (safe fields) and auth.service.js responses.
 * Never duplicate interfaces
 */

export type UserRole = "ADMIN" | "BROKER" | "OPERATOR" | "DISPATCHER" | "PILOT" | "USER";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

export interface UserProfile {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  isEmailVerified: boolean;
  isActive: boolean;
  organizations: Array<{
    organizationId: string;
    role: string;
    joinedAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
}

export interface VerifyEmailPayload {
  token: string;
}

export interface LoginResponseData {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponseData {
  accessToken: string;
}

export interface RegisterResponseData {
  id: string;
  email: string;
}
