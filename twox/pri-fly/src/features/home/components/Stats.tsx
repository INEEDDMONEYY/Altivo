import { Building2, PlaneTakeoff, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

const stats: Stat[] = [
  {
    label: "Verified Operators",
    value: "1,200+",
    description: "Active operators on the network",
    icon: Building2,
    iconColor: "text-sky-500",
    iconBg: "bg-sky-50",
  },
  {
    label: "Flights Requested",
    value: "48K+",
    description: "RFQs submitted to date",
    icon: PlaneTakeoff,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    label: "Global Hubs",
    value: "40+",
    description: "Countries with active coverage",
    icon: Globe,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
  },
];

export default function Stats() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="container">

        {/* Section heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 text-center">
            By the Numbers
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl text-center">
            Trusted by operators
            <span className="block text-sky-400">worldwide.</span>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-sky-200 transition-all"
              >
                {/* Icon */}
                <span className={`flex items-center justify-center w-14 h-14 rounded-2xl ${s.iconBg} mb-5`}>
                  <Icon size={26} className={s.iconColor} />
                </span>

                {/* Value */}
                <p className="text-4xl font-bold text-slate-900 text-center">
                  {s.value}
                </p>

                {/* Label */}
                <p className="mt-2 text-base font-semibold text-slate-700 text-center">
                  {s.label}
                </p>

                {/* Description */}
                <p className="mt-1 text-sm text-slate-500 text-center">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

