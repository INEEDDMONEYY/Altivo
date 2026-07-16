import { Link } from "react-router-dom";
import { Users, Gauge, MapPin } from "lucide-react";
import { aircraft } from "../data/aircraft";
import type { Aircraft } from "../../../types/aircraft";

export default function AircraftGrid() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
        {/* Ambient glow, consistent with Hero / HowItWorks */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px]" />

        <div className="container relative z-10">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 text-center">
              Our Fleet
            </p>

            <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl text-center">
              Aircraft for
              <span className="block text-sky-400">every mission.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 text-center">
              From light jets to ultra long range, browse verified aircraft available
              through our operator network.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aircraft.map((jet: Aircraft) => (
              <div
                key={jet.id}
                className="group glass relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 hover:border-sky-300 transition"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={jet.image}
                    alt={jet.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/0 to-white/0" />

                  <span className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600 backdrop-blur whitespace-nowrap">
                    {jet.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-lg font-bold text-slate-900">
                    {jet.name}
                  </h3>

                  {/* Specs */}
                  <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-sky-500" />
                      {jet.passengers} pax
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-sky-500" />
                      {jet.range} nm
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Gauge className="h-4 w-4 text-sky-500" />
                      {jet.speed} mph
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col items-center gap-3">
                    <span className="text-sm text-slate-500">
                      from{" "}
                      <span className="font-semibold text-slate-900">
                        ${jet.hourlyRate?.toLocaleString()}/hr
                      </span>
                    </span>

                    <Link
                      to={`/aircraft/${jet.id}`}
                      className="rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}