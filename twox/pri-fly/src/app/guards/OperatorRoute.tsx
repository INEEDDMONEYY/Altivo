import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../../store/authStore";

/**
 * Restricts nested routes to OPERATOR users. Must be used inside ProtectedRoute.
 */
export default function OperatorRoute() {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== "OPERATOR") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
