import { create } from "zustand";
import type { User } from "../types/auth";
import { getItem, setItem, removeItem } from "../utils/storage";

// The backend hands the refresh token back in the login response body
// (no httpOnly cookie), so it has to be persisted here to survive reloads.
// NOTE: this is readable by any injected script (XSS risk) — ideally the
// backend would set this as an httpOnly cookie instead.
const REFRESH_TOKEN_KEY = "altivo_refresh_token";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isInitializing: boolean;
  setSession: (user: User, accessToken: string, refreshToken?: string) => void;
  setAccessToken: (accessToken: string) => void;
  clearSession: () => void;
  setInitializing: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  accessToken: null,
  refreshToken: getItem<string>(REFRESH_TOKEN_KEY),
  isAuthenticated: false,
  isInitializing: true,
  setSession: (user, accessToken, refreshToken) => {
    const nextRefreshToken = refreshToken ?? get().refreshToken;
    if (refreshToken) setItem(REFRESH_TOKEN_KEY, refreshToken);
    set({
      user,
      accessToken,
      refreshToken: nextRefreshToken,
      isAuthenticated: true,
      isInitializing: false,
    });
  },
  setAccessToken: (accessToken) => set({ accessToken }),
  clearSession: () => {
    removeItem(REFRESH_TOKEN_KEY);
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isInitializing: false,
    });
  },
  setInitializing: (value) => set({ isInitializing: value }),
}));