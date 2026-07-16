import { Link } from "react-router-dom";
import { Plane, ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 text-white px-4 text-center">

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10">
        <Plane className="w-9 h-9 text-sky-400" />
      </div>

      {/* 404 */}
      <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 mb-3">
        Error 404
      </p>

      <h1 className="relative z-10 text-5xl sm:text-6xl font-bold text-white mb-4">
        Page Not Found
      </h1>

      <p className="relative z-10 max-w-md text-base sm:text-lg text-white/50 leading-relaxed mb-10">
        This route hasn't been built yet or doesn't exist. Head back to the homepage to continue.
      </p>

      {/* Actions */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold text-sm tracking-wide hover:opacity-90 transition shadow-lg shadow-sky-500/20"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 font-medium text-sm hover:bg-white/10 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </div>

    </div>
  );
}
