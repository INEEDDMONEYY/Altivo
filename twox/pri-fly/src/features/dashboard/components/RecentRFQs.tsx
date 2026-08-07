import type { RFQ } from "../../rfqs/types";

interface RecentRFQsProps {
  rfqs?: RFQ[];
}

export default function RecentRFQs({ rfqs = [] }: RecentRFQsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">Recent RFQs</h3>
      {rfqs.length === 0 && <p className="mt-2 text-sm text-slate-500">No recent RFQs</p>}
    </div>
  );
}
