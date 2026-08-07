import NavigationLogo from "./NavigationLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import NavigationActions from "./NavigationActions";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black backdrop-blur-xl">
      <div className="container h-16">
        <div className="relative h-full flex items-center gap-6">

          {/* Logo — absolute-centered on mobile, left-aligned on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex shrink-0 items-center justify-start">
            <NavigationLogo />
          </div>

          {/* Center — Desktop nav only. flex-1 lets it grow with more items
              without colliding with the actions on the right. */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <DesktopNavigation />
          </div>

          {/* Right — hamburger on mobile, full actions on desktop */}
          <div className="flex ml-auto md:ml-0 shrink-0 items-center gap-3">
            <NavigationActions />
            <MobileNavigation />
          </div>

        </div>
      </div>
    </header>
  );
}