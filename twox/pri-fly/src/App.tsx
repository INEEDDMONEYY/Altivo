import { Routes, Route } from "react-router-dom";

import MainLayout from "./app/layouts/MainLayout";
import HomePage from "./features/home/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      {/* Auth pages (no header/footer) */}
      <Route path="/login" element={<LoginPage />} />

      {/* App/Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Public site — MainLayout wraps all remaining routes including 404 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}