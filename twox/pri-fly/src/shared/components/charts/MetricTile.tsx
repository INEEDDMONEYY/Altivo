interface MetricTileProps {
  label: string;
  value: string | number;
}

export default function MetricTile({ label, value }: MetricTileProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}
