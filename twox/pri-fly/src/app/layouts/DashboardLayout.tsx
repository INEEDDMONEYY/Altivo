import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div
      data-theme="dark"
      className="min-h-screen w-full bg-[var(--background)] text-[var(--text-primary)]"
    >
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}