import { Outlet } from "react-router-dom";
import DashboardSidebar from "./Sidebar/DashboardSidebar";
import DashboardHeader from "./Header/DashboardHeader";

export default function DashboardShell() {
  return (
    <div
      data-theme="dark"
      className="flex min-h-screen w-full bg-[var(--background)] text-[var(--text-primary)]"
    >
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
