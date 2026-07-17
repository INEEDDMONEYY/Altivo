import { Routes, Route } from "react-router-dom";

import MainLayout from "./app/layouts/MainLayout";
import AuthLayout from "./app/layouts/AuthLayout";
import ProtectedRoute from "./app/guards/ProtectedRoute";
import HomePage from "./features/home/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./features/auth/ForgotPasswordPage";
import VerifyEmailPage from "./features/auth/VerifyEmailPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* Public site — MainLayout wraps all remaining routes including 404 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
