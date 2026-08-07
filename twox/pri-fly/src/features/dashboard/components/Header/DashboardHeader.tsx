import BreadCrumbs from "./BreadCrumbs";
import HeaderSearch from "./HeaderSearch";
import HeaderNotifications from "./HeaderNotifications";
import HeaderActions from "./HeaderActions";
import UserMenu from "./UserMenu";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-6 py-4">
      <BreadCrumbs items={[{ label: "Dashboard" }]} />
      <div className="flex items-center gap-3">
        <HeaderSearch />
        <HeaderNotifications />
        <HeaderActions />
        <UserMenu />
      </div>
    </header>
  );
}
