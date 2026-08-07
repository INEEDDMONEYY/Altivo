import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./Sidebar/DashboardSidebar";
import DashboardHeader from "./Header/DashboardHeader";

export default function DashboardShell() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div
      data-theme="dark"
      className="flex min-h-screen w-full bg-[var(--background)] text-[var(--text-primary)]"
    >
      <DashboardSidebar mobileOpen={mobileNavOpen} onCloseMobile={() => setMobileNavOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader onOpenMobileNav={() => setMobileNavOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
