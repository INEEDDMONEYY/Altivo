import { FileText, PlaneTakeoff, Clock } from "lucide-react";

import { useAuthStore } from "../../../store/authStore";
import { useRecentRFQs } from "../hooks/useRecentRFQs";
import { getGreeting, getDisplayName } from "../utils";
import StatCard from "../components/StatCard";
import FleetAvailability from "./FleetAvailability";
import ResponseRate from "./ResponseRate";
import UpcomingTrips from "./UpcomingTrips";

export default function OperatorOverviewPage() {
  const user = useAuthStore((state) => state.user);
  const { rfqs } = useRecentRFQs();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-[var(--text-muted)]">{getGreeting()},</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{getDisplayName(user?.email)}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Open RFQs" value={String(rfqs.length)} icon={FileText} />
        <StatCard label="Pending Quotes" value="6" sublabel="Awaiting broker response" icon={PlaneTakeoff} />
        <StatCard label="Avg. Response Time" value="18 min" sublabel="Within the 30-min SLA target" icon={Clock} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <FleetAvailability />
          <UpcomingTrips />
        </div>
        <ResponseRate />
      </div>
    </div>
  );
}
