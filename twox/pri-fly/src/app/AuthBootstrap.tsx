import { useEffect, type ReactNode } from "react";

import { useAuthStore } from "../store/authStore";
import PageLoader from "../shared/components/PageLoader";

interface AuthBootstrapProps {
  children: ReactNode;
}

/**
 * Restores an existing session (if any) from the persisted refresh token
 * before the rest of the app renders. Mount this once, above <Routes>.
 */
export default function AuthBootstrap({ children }: AuthBootstrapProps) {
  const isBootstrapping = useAuthStore((state) => state.isBootstrapping);
  const bootstrap = useAuthStore((state) => state.bootstrap);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  if (isBootstrapping) {
    return <PageLoader />;
  }

  return <>{children}</>;
}
