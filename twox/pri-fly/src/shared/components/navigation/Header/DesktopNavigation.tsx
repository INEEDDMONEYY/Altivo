import { NavLink } from "react-router-dom";
import { Plane, Building2, BookOpen, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const links: { label: string; path: string; icon: LucideIcon }[] = [
  { label: "Aircraft",     path: "/aircraft",    icon: Plane },
  { label: "Operators",    path: "/operators",   icon: Building2 },
  { label: "How It Works", path: "/how-it-works", icon: BookOpen },
  { label: "RFQs",         path: "/rfqs",        icon: FileText },
];

export default function DesktopNavigation() {
  return (
    <nav className="flex items-center gap-2">
      {links.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition ${
              isActive
                ? "text-white bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`
          }
        >
          <Icon size={20} strokeWidth={2} className="shrink-0" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}