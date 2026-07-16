import { Search, FileCheck2, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Search,
    label: "Step One",
    title: "Submit your",
    titleAccent: "RFQ",
    description:
      "Tell us your route, dates, and passenger count — takes less than a minute.",
  },
  {
    id: "02",
    icon: FileCheck2,
    label: "Step Two",
    title: "Compare",
    titleAccent: "live quotes",
    description:
      "Verified operators respond in real time with structured, comparable pricing.",
  },
  {
    id: "03",
    icon: PlaneTakeoff,
    label: "Step Three",
    title: "Book &",
    titleAccent: "fly",
    description:
      "Confirm your operator and aircraft, then depart on your schedule.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white">
        {/* Subtle sky accent glow, matching hero */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px]" />

        <div className="container relative z-10 py-12 sm:py-16 lg:py-24">
          {/* Section heading */}
          <div className="text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 text-center">
              How It Works
            </p>

            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl text-center">
              Booking private aviation,
              <span className="block text-sky-400">simplified end to end.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600 text-center">
              Three steps between you and your next flight — no calls, no back-and-forth.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-14 sm:mt-16 grid gap-8 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="glass relative rounded-2xl bg-white/70 border border-slate-200 p-8 text-center lg:text-left hover:border-sky-300 transition"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
                      {step.label}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900 text-center lg:text-left">
                    {step.title}{" "}
                    <span className="text-sky-400">{step.titleAccent}</span>
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 text-center lg:text-left">
                    {step.description}
                  </p>

                  <span className="pointer-events-none absolute top-6 right-6 text-6xl font-bold text-slate-100 select-none">
                    {step.id}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Feature pills, same style as hero */}
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <div className="glass rounded-full px-5 py-3 text-sm text-slate-800 bg-white/70">
              ✓ Verified Operators
            </div>
            <div className="glass rounded-full px-5 py-3 text-sm text-slate-800 bg-white/70">
              ⚡ Real-Time Responses
            </div>
            <div className="glass rounded-full px-5 py-3 text-sm text-slate-800 bg-white/70">
              🌍 40+ Global Hubs
            </div>
          </div>
        </div>
      </section>
  );
}