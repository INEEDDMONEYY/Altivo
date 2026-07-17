import { useEffect } from "react";
import type { ReactNode } from "react";
import { useAuthStore } from "../store/authStore";
import { getCurrentUser, refreshSession } from "../services/auth";
import PageLoader from "../shared/components/PageLoader";

interface AuthBootstrapProps {
  children: ReactNode;
}

/**
 * Attempts a silent session restore on first load using the refresh token
 * persisted in localStorage (see store/authStore.ts), so a page refresh
 * doesn't force the user to log in again. Renders a loader until the check
 * completes.
 */
export default function AuthBootstrap({ children }: AuthBootstrapProps) {
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const storedRefreshToken = useAuthStore((state) => state.refreshToken);
  const setSession = useAuthStore((state) => state.setSession);
  const setInitializing = useAuthStore((state) => state.setInitializing);
  const clearSession = useAuthStore((state) => state.clearSession);

  useEffect(() => {
    let active = true;

    (async () => {
      if (!storedRefreshToken) {
        if (active) setInitializing(false);
        return;
      }

      try {
        const { accessToken } = await refreshSession(storedRefreshToken);
        useAuthStore.getState().setAccessToken(accessToken);
        const user = await getCurrentUser();
        if (active) setSession(user, accessToken, storedRefreshToken);
      } catch {
        if (active) clearSession();
      }
    })();

    return () => {
      active = false;
    };
    // Runs once on mount by design — the stored refresh token is only read at
    // startup here; subsequent refreshes go through lib/api.ts's interceptor.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isInitializing) return <PageLoader />;

  return children;
}
