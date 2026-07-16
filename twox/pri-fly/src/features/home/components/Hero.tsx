import BookingWidget from "./BookingWidget";
import heroImage from "../../../assets/altivo-jet.jpg";

export default function Hero() {
  return (
    <section
      className="relative isolate w-screen left-1/2 -translate-x-1/2 min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft readability overlay (replaces heavy black layer) */}
      <div className="absolute inset-0 bg-white/10 backdrop-brightness-75" />

      {/* Gentle bottom fade into page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/90" />

      {/* Subtle sky accent glow (lighter, less aggressive) */}
      <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[160px]" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid items-center gap-8 py-14 sm:py-20 lg:gap-16 lg:py-24 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-500">
              Private Aviation RFQ Network
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Request private aircraft instantly.
              <span className="block text-sky-400">
                Compare operators in real time.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/80 lg:mx-0 text-center">
              Submit one RFQ and receive structured quotes from verified operators worldwide.
              Compare pricing, availability, and response times in one streamlined platform.
            </p>

            {/* Feature Pills (now light glass, not dark glass) */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-center">

              <div className="glass rounded-full px-5 py-3 text-sm text-slate-800 bg-white/70 ">
                ✓ Verified Operators
              </div>

              <div className="glass rounded-full px-5 py-3 text-sm text-slate-800 bg-white/70 ">
                🌍 40+ Global Hubs
              </div>

              <div className="glass rounded-full px-5 py-3 text-sm text-slate-800 bg-white/70 ">
                ⚡ Real-Time Responses
              </div>

            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.25em] text-white/70">
              Trusted by operators across 40+ global hubs
            </p>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex w-full justify-center lg:justify-end">
            <BookingWidget />
          </div>

        </div>
      </div>
    </section>
  );
}