import type { RFQ } from "../types";
import RFQStatusBadge from "./RFQStatusBadge";

interface RFQCardProps {
  rfq: RFQ;
}

export default function RFQCard({ rfq }: RFQCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <span className="text-sm font-medium text-slate-900">RFQ #{rfq.id}</span>
      <RFQStatusBadge status={rfq.status} />
    </div>
  );
}
