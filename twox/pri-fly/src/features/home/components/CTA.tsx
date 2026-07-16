import SectionWrapper from "./SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm transition-shadow hover:shadow-md sm:px-10 sm:py-16 lg:px-16">

          {/* Section Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">
            Ready to Fly
          </p>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            One request.
            <span className="block text-sky-500">
              Every qualified operator.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Submit your flight requirements once and receive competitive
            quotes from verified operators around the world—all through one
            intelligent platform designed for speed and transparency.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-sky-600 hover:shadow-md">
              Request a Flight
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-sky-300 hover:text-sky-600">
              Learn More
            </button>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-slate-500">
            Trusted by private aviation professionals across 40+ global hubs.
          </p>

        </div>
      </div>
    </SectionWrapper>
  );
}