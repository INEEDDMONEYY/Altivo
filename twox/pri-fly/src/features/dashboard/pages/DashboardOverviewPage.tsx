import { useAuthStore } from "../../../store/authStore";
import AdminOverviewPage from "../admin/AdminOverviewPage";
import OperatorOverviewPage from "../operator/OperatorOverviewPage";

/** Dispatches to the role-specific dashboard overview. */
export default function DashboardOverviewPage() {
  const role = useAuthStore((state) => state.user?.role);

  if (role === "ADMIN") return <AdminOverviewPage />;
  if (role === "OPERATOR") return <OperatorOverviewPage />;
  return <OperatorOverviewPage />;
}
