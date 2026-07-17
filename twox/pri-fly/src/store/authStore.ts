import { create } from "zustand";

import * as authService from "../services/auth";
import { setTokens, getRefreshToken, clearTokens } from "../utils/storage";
import type { AuthUser, LoginPayload, RegisterPayload } from "../types/auth";

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isBootstrapping: boolean;
  error: string | null;

  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  bootstrap: () => Promise<void>;
}

/**Use Zustand */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isBootstrapping: true,
  error: null,

  login: async (payload) => {
    set({ error: null });
    const result = await authService.login(payload);
    setTokens(result.accessToken, result.refreshToken);
    set({ user: result.user, isAuthenticated: true });
  },

  register: async (payload) => {
    set({ error: null });
    await authService.register(payload);
  },

  logout: async () => {
    try {
      await authService.logout();
    } catch {
      // Ignore network errors on logout — clear local state regardless.
    }
    clearTokens();
    set({ user: null, isAuthenticated: false });
  },

  /**
   * Called once on app load to restore a session from a persisted
   * refresh token (see AuthBootstrap.tsx).
   */
  bootstrap: async () => {
    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      set({ isBootstrapping: false });
      return;
    }

    try {
      const profile = await authService.getMe();
      set({
        user: { id: profile._id, email: profile.email, role: profile.role },
        isAuthenticated: true,
      });
    } catch {
      clearTokens();
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isBootstrapping: false });
    }
  },
}));
