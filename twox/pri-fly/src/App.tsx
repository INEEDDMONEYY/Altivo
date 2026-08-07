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
import OperatorLeaderboardPage from "./features/leaderboard/pages/OperatorLeaderboardPage";
import BrokerLeaderboardPage from "./features/leaderboard/pages/BrokerLeaderboardPage";
import OperatorQuotesPage from "./features/dashboard/operator/pages/OperatorQuotesPage";
import OperatorAvailabilityPage from "./features/dashboard/operator/pages/OperatorAvailabilityPage";
import OperatorTripsPage from "./features/dashboard/operator/pages/OperatorTripsPage";

import WhyAltivoPage from "./features/why-altivo/pages/WhyAltivoPage";
import WhyAltivoBrokersPage from "./features/why-altivo/pages/WhyAltivoBrokersPage";
import WhyAltivoOperatorsPage from "./features/why-altivo/pages/WhyAltivoOperatorsPage";
import PaymentsPage from "./features/payments/pages/PaymentsPage";
import PaymentsHowItWorksPage from "./features/payments/pages/PaymentsHowItWorksPage";
import PaymentsSecurityPage from "./features/payments/pages/PaymentsSecurityPage";
import PaymentsFaqPage from "./features/payments/pages/PaymentsFaqPage";
import PaymentsOperatorsPage from "./features/payments/pages/PaymentsOperatorsPage";
import JoinAltivoPage from "./features/join-altivo/pages/JoinAltivoPage";
import JoinAltivoBrokersPage from "./features/join-altivo/pages/JoinAltivoBrokersPage";
import JoinAltivoOperatorsPage from "./features/join-altivo/pages/JoinAltivoOperatorsPage";
import ResourcesPage from "./features/resources/pages/ResourcesPage";
import ResourcesBlogPage from "./features/resources/pages/ResourcesBlogPage";
import ResourcesFaqsPage from "./features/resources/pages/ResourcesFaqsPage";
import ResourcesGuidesPage from "./features/resources/pages/ResourcesGuidesPage";
import ResourcesApisPage from "./features/resources/pages/ResourcesApisPage";
import ResourcesDevPortalPage from "./features/resources/pages/ResourcesDevPortalPage";
import ContactPage from "./features/contact/pages/ContactPage";
import ContactSubmitTicketPage from "./features/contact/pages/ContactSubmitTicketPage";
import ContactRequestCallbackPage from "./features/contact/pages/ContactRequestCallbackPage";
import ContactEmailPage from "./features/contact/pages/ContactEmailPage";
import PricingPage from "./features/pricing/pages/PricingPage";

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
            <Route path="/dashboard/leaderboard/operators" element={<OperatorLeaderboardPage />} />
            <Route path="/dashboard/leaderboard/brokers" element={<BrokerLeaderboardPage />} />
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

        <Route path="/why-altivo" element={<WhyAltivoPage />} />
        <Route path="/why-altivo/brokers" element={<WhyAltivoBrokersPage />} />
        <Route path="/why-altivo/operators" element={<WhyAltivoOperatorsPage />} />

        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/how-it-works" element={<PaymentsHowItWorksPage />} />
        <Route path="/payments/security" element={<PaymentsSecurityPage />} />
        <Route path="/payments/faq-payments" element={<PaymentsFaqPage />} />
        <Route path="/payments/operators" element={<PaymentsOperatorsPage />} />

        <Route path="/join-altivo" element={<JoinAltivoPage />} />
        <Route path="/join-altivo/brokers" element={<JoinAltivoBrokersPage />} />
        <Route path="/join-altivo/operators" element={<JoinAltivoOperatorsPage />} />

        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/blog" element={<ResourcesBlogPage />} />
        <Route path="/resources/faqs" element={<ResourcesFaqsPage />} />
        <Route path="/resources/guides" element={<ResourcesGuidesPage />} />
        <Route path="/resources/apis" element={<ResourcesApisPage />} />
        <Route path="/resources/dev-portal" element={<ResourcesDevPortalPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact/submit-ticket" element={<ContactSubmitTicketPage />} />
        <Route path="/contact/request-callback" element={<ContactRequestCallbackPage />} />
        <Route path="/contact/email" element={<ContactEmailPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
