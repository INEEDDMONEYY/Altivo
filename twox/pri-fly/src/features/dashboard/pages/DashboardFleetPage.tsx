import { useAuthStore } from "../../../store/authStore";
import FleetMapPage from "../../aircraft/pages/FleetMapPage";
import OperatorFleetPage from "../operator/pages/OperatorFleetPage";

/** Both the admin and operator nav configs point "/dashboard/fleet" here; dispatch by role. */
export default function DashboardFleetPage() {
  const role = useAuthStore((state) => state.user?.role);

  if (role === "ADMIN") return <FleetMapPage />;
  return <OperatorFleetPage />;
}
