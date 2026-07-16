import { Outlet } from "react-router-dom";

import Header from "../../shared/components/navigation/Header/Header";
import Footer from "../../shared/components/navigation/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--background)] text-white overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}