import type { Operator } from "../types";

interface OperatorCardProps {
  operator: Operator;
}

export default function OperatorCard({ operator }: OperatorCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{operator.name}</h3>
    </div>
  );
}
