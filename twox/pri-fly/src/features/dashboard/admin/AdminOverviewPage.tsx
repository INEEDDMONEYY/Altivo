import { FileText, Building2, Clock } from "lucide-react";

import { useAuthStore } from "../../../store/authStore";
import { useRecentRFQs } from "../hooks/useRecentRFQs";
import { getGreeting, getDisplayName } from "../utils";
import StatCard from "../components/StatCard";
import PlatformMetrics from "./PlatformMetrics";
import UserGrowth from "./UserGrowth";
import AuditActivity from "./AuditActivity";

export default function AdminOverviewPage() {
  const user = useAuthStore((state) => state.user);
  const { rfqs } = useRecentRFQs();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-[var(--text-muted)]">{getGreeting()},</p>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">{getDisplayName(user?.email)}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Active RFQs" value={String(rfqs.length)} icon={FileText} />
        <StatCard label="Verified Operators" value="1,204" sublabel="Across the network" icon={Building2} />
        <StatCard label="Avg. Response Time" value="27 min" sublabel="Within the 30-min SLA target" icon={Clock} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <PlatformMetrics />
          <AuditActivity />
        </div>
        <UserGrowth />
      </div>
    </div>
  );
}
