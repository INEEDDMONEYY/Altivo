import { Menu } from "lucide-react";

import BreadCrumbs from "./BreadCrumbs";
import HeaderSearch from "./HeaderSearch";
import HeaderNotifications from "./HeaderNotifications";
import HeaderActions from "./HeaderActions";
import UserMenu from "./UserMenu";

interface DashboardHeaderProps {
  onOpenMobileNav?: () => void;
}

export default function DashboardHeader({ onOpenMobileNav }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileNav}
          aria-label="Open navigation menu"
          className="flex shrink-0 items-center justify-center rounded-lg p-2 text-[var(--text-muted)] hover:bg-[var(--surface-hover)] lg:hidden"
        >
          <Menu size={20} />
        </button>
        <BreadCrumbs items={[{ label: "Dashboard" }]} />
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <HeaderSearch />
        <HeaderNotifications />
        <HeaderActions />
        <UserMenu />
      </div>
    </header>
  );
}
