// Never duplicate interfaces — this is the single source of truth for auth-related types.
import type { Role } from "../config/permissions";

// The full profile returned by GET /auth/me.
export interface User {
  id: string;
  email: string;
  role: Role;
  firstName?: string;
  lastName?: string;
  organizationId?: string;
  isEmailVerified?: boolean;
}

// The trimmed-down user object embedded directly in the login response
// (see services/auth.service.js's `login`) — only id/email/role.
export interface AuthUser {
  id: string;
  email: string;
  role: Role;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// POST /auth/register only creates the account — it does not log the user
// in, so no tokens/session are returned.
export interface RegisterResponse {
  id: string;
  email: string;
}

// POST /auth/login. NOTE: the backend does not use an httpOnly cookie for
// the refresh token — it's returned in the body and must be persisted
// client-side (localStorage) and replayed in POST /auth/refresh-token.
export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}
