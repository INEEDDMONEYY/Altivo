import { Outlet } from "react-router-dom";

// TODO: swap in DashboardShell (Sidebar + Header) once the dashboard UI is built
export default function DashboardLayout() {
  return (
    <div data-theme="dark" className="min-h-screen w-full bg-[var(--background)] text-[var(--text-primary)]">
      <Outlet />
    </div>
  );
}