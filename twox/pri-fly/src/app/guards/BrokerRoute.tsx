import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../../store/authStore";

/**
 * Restricts nested routes to BROKER users. Must be used inside ProtectedRoute.
 */
export default function BrokerRoute() {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== "BROKER") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
