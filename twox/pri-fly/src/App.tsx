import { Routes, Route } from "react-router-dom";

import MainLayout from "./app/layouts/MainLayout";
import AuthLayout from "./app/layouts/AuthLayout";
import ProtectedRoute from "./app/guards/ProtectedRoute";
import AdminRoute from "./app/guards/AdminRoute";
import OperatorRoute from "./app/guards/OperatorRoute";
import HomePage from "./features/home/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./features/auth/ForgotPasswordPage";
import VerifyEmailPage from "./features/auth/VerifyEmailPage";
import NotFoundPage from "./pages/NotFoundPage";

import DashboardShell from "./features/dashboard/components/DashboardShell";
import DashboardOverviewPage from "./features/dashboard/pages/DashboardOverviewPage";
import DashboardFleetPage from "./features/dashboard/pages/DashboardFleetPage";
import RFQsPage from "./features/rfqs/pages/RFQsPage";
import AnalyticsPage from "./features/analytics/pages/AnalyticsPage";
import SlaPage from "./features/sla/pages/SlaPage";
import SettingsPage from "./features/settings/pages/SettingsPage";
import OperatorsPage from "./features/operators/pages/OperatorsPage";
import AircraftPage from "./features/aircraft/pages/AircraftPage";
import UsersPage from "./features/admin/pages/UsersPage";
import OperatorQuotesPage from "./features/dashboard/operator/pages/OperatorQuotesPage";
import OperatorAvailabilityPage from "./features/dashboard/operator/pages/OperatorAvailabilityPage";
import OperatorTripsPage from "./features/dashboard/operator/pages/OperatorTripsPage";

export default function App() {
  return (
    <Routes>
      {/* Auth pages (no header/footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Route>

      {/* App/Dashboard (requires authentication) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardShell />}>
          <Route path="/dashboard" element={<DashboardOverviewPage />} />
          <Route path="/dashboard/rfqs" element={<RFQsPage />} />
          <Route path="/dashboard/fleet" element={<DashboardFleetPage />} />
          <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
          <Route path="/dashboard/sla" element={<SlaPage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />

          {/* Admin-only */}
          <Route element={<AdminRoute />}>
            <Route path="/dashboard/operators" element={<OperatorsPage />} />
            <Route path="/dashboard/aircraft" element={<AircraftPage />} />
            <Route path="/dashboard/users" element={<UsersPage />} />
          </Route>

          {/* Operator-only */}
          <Route element={<OperatorRoute />}>
            <Route path="/dashboard/quotes" element={<OperatorQuotesPage />} />
            <Route path="/dashboard/availability" element={<OperatorAvailabilityPage />} />
            <Route path="/dashboard/trips" element={<OperatorTripsPage />} />
          </Route>
        </Route>
      </Route>

      {/* Public site — MainLayout wraps all remaining routes including 404 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
