import { Outlet } from "react-router-dom";
import DashboardSidebar from "./Sidebar/DashboardSidebar";
import DashboardHeader from "./Header/DashboardHeader";

export default function DashboardShell() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
