import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { navLinks } from "../../../../config/navigation";

export default function DesktopNavigation() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const location = useLocation();

  return (
    // Remounting on route change resets openPath, so a click always dismisses the dropdown.
    <nav key={location.pathname} className="flex items-center gap-3">
      {navLinks.map(({ label, path, children }) => {
        const isOpen = openPath === path;
        return (
          <div
            key={path}
            className="relative"
            onMouseEnter={() => children && setOpenPath(path)}
            onMouseLeave={() => setOpenPath((current) => (current === path ? null : current))}
          >
            <NavLink
              to={path}
              onClick={() => setOpenPath(null)}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "text-red-400 bg-white/10"
                    : "text-white/60 hover:text-red-300 hover:bg-white/5"
                }`
              }
            >
              {/* <Icon size={18} strokeWidth={2} className="shrink-0" /> */}
              {label}
              {children && (
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                />
              )}
            </NavLink>

            {children && isOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[200px] rounded-xl border border-white/10 bg-black/95 p-2 shadow-xl backdrop-blur-xl">
                  {children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      onClick={() => setOpenPath(null)}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm transition ${
                          isActive
                            ? "text-red-400 bg-white/10"
                            : "text-white/60 hover:text-red-300 hover:bg-white/5"
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}