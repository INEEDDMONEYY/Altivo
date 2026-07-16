import { useState } from "react";
import { Menu, X, Plane, Building2, BookOpen, FileText, LogIn, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

const links: { label: string; path: string; icon: LucideIcon }[] = [
  { label: "Aircraft",     path: "/aircraft",     icon: Plane },
  { label: "Operators",    path: "/operators",    icon: Building2 },
  { label: "How It Works", path: "/how-it-works", icon: BookOpen },
  { label: "RFQs",         path: "/rfqs",         icon: FileText },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-3 py-3 flex flex-col gap-1">
          {links.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition text-sm"
            >
              <Icon size={20} strokeWidth={2} className="text-sky-400 shrink-0" />
              {label}
            </Link>
          ))}

          <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition text-sm"
            >
              <LogIn size={20} strokeWidth={2} className="text-sky-400 shrink-0" />
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium text-sm hover:opacity-90 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}