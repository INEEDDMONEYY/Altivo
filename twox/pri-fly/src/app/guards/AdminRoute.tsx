import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../../store/authStore";

/**
 * Restricts nested routes to ADMIN users. Must be used inside ProtectedRoute.
 */
export default function AdminRoute() {
  const user = useAuthStore((state) => state.user);

  if (user?.role !== "ADMIN") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
