import { Routes, Route } from "react-router-dom";

import AuthBootstrap from "./app/AuthBootstrap";
import MainLayout from "./app/layouts/MainLayout";
import DashboardLayout from "./app/layouts/DashboardLayout";
import AdminRoute from "./app/guards/AdminRoute";
import BrokerRoute from "./app/guards/BrokerRoute";
import OperatorRoute from "./app/guards/OperatorRoute";

import HomePage from "./features/home/HomePage";
import LoginPage from "./features/auth/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import BrokerDashboardPage from "./pages/BrokerDashboardPage";
import OperatorDashboardPage from "./pages/OperatorDashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <AuthBootstrap>
    <Routes>
      {/* Auth pages (no header/footer) */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin dashboard */}
      <Route element={<AdminRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Route>

      {/* Broker dashboard */}
      <Route element={<BrokerRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/broker" element={<BrokerDashboardPage />} />
        </Route>
      </Route>

      {/* Operator dashboard */}
      <Route element={<OperatorRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/operator" element={<OperatorDashboardPage />} />
        </Route>
      </Route>

      {/* Public site */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </AuthBootstrap>
  );
}