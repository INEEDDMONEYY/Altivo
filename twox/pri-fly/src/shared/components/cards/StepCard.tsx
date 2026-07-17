import type { LucideIcon } from "lucide-react";

interface StepCardProps {
  step?: number;
  icon?: LucideIcon;
  title: string;
  description?: string;
}

export default function StepCard({ step, icon: Icon, title, description }: StepCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
        {Icon ? <Icon size={20} /> : step && <span className="font-semibold">{step}</span>}
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-slate-500">{description}</p>}
    </div>
  );
}
