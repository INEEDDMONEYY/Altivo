import { useState } from "react";
import { MapPin, Navigation, CalendarDays, PlaneTakeoff, Clock } from "lucide-react";

export default function BookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const inputClass =
    "w-full rounded-xl bg-transparent text-white text-sm text-center placeholder:text-white/50 outline-none py-3.5 pr-3 border-0";

  const wrapperClass =
    "flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-3.5 focus-within:border-sky-300/60 focus-within:ring-2 focus-within:ring-sky-300/20 transition";

  const iconClass = "w-4 h-4 text-sky-300 shrink-0";

  return (
    <div className="w-full max-w-sm mx-auto rounded-3xl p-7 border border-white/20 bg-white/15 backdrop-blur-2xl shadow-2xl">

      {/* HEADER */}
      <div className="mb-7 text-center space-y-1.5">
        <h3 className="text-white text-lg font-semibold tracking-tight">
          Create Flight Request
        </h3>
        <p className="text-xs text-white/65 leading-relaxed">
          Submit your route and receive instant operator quotes
        </p>
      </div>

      {/* FORM */}
      <div className="flex flex-col gap-3">

        {/* FROM */}
        <div className={wrapperClass}>
          <MapPin className={iconClass} />
          <input
            placeholder="Departure city"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* TO */}
        <div className={wrapperClass}>
          <Navigation className={iconClass} />
          <input
            placeholder="Destination city"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* DATE */}
        <div className={wrapperClass}>
          <CalendarDays className={iconClass} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`${inputClass} [color-scheme:dark] text-center`}
          />
        </div>

        {/* BUTTON */}
        <button className="mt-1.5 w-full flex items-center justify-center gap-2 rounded-full py-3.5 bg-gradient-to-b from-sky-400 to-sky-600 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.4)_inset,0_-4px_8px_rgba(0,0,0,0.15)_inset,0_8px_16px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition">
          <PlaneTakeoff className="w-4 h-4" />
          Request Quotes
        </button>

        {/* FOOTNOTE */}
        <p className="flex items-center justify-center gap-1.5 text-xs text-white/55 pt-0.5">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          Responses typically arrive within minutes
        </p>
      </div>
    </div>
  );
}