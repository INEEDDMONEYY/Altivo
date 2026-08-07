import { Link } from "react-router-dom";
import { LogIn, ArrowRight } from "lucide-react";

export default function NavigationActions() {
  return (
    <div className="hidden md:flex items-center gap-5">
      <Link
        to="/login"
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white hover:text-red-400 hover:bg-white/5 transition"
      >
        <LogIn size={20} strokeWidth={2} />
        Membership Login
      </Link>

      <Link
        to="/join-altivo"
        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-400 to-gray-500 text-white text-sm font-semibold tracking-wide hover:opacity-90 transition shadow-lg shadow-red-500/20"
      >
        Get Started
        <ArrowRight size={20} strokeWidth={2} />
      </Link>
    </div>
  );
}