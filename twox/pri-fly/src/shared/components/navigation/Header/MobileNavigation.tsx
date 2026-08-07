import { useState } from "react";
import { Menu, X, ChevronDown, LogIn, ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../../../../config/navigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [expandedPath, setExpandedPath] = useState<string | null>(null);

  const closeMenu = () => {
    setOpen(false);
    setExpandedPath(null);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-3 py-3 flex flex-col gap-1">
          {navLinks.map(({ label, path, children }) => {
            const isExpanded = expandedPath === path;
            return (
              <div key={path}>
                <div className="flex items-center gap-1">
                  <NavLink
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex-1 px-3 py-3 rounded-xl text-sm transition ${
                        isActive
                          ? "text-red-400 bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                  {children && (
                    <button
                      onClick={() => setExpandedPath(isExpanded ? null : path)}
                      aria-label={`Toggle ${label} submenu`}
                      className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition"
                    >
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        className={`transition ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {children && isExpanded && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                    {children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-xl text-sm transition ${
                            isActive
                              ? "text-red-400 bg-white/10"
                              : "text-white/60 hover:text-white hover:bg-white/5"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="border-t border-white/10 mt-2 pt-3 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition text-sm"
            >
              <LogIn size={20} strokeWidth={2} className="text-red-400 shrink-0" />
              Sign In
            </Link>
            <Link
              to="/join-altivo"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-400 to-gray-500 text-white font-medium text-sm hover:opacity-90 transition"
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