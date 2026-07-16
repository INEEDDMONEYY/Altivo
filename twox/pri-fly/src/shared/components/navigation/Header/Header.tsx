import NavigationLogo from "./NavigationLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import NavigationActions from "./NavigationActions";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container h-16">
        <div className="relative h-full flex items-center md:grid md:grid-cols-3">

          {/* Logo — absolute-centered on mobile, left column on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex justify-start">
            <NavigationLogo />
          </div>

          {/* Center — Desktop nav only */}
          <div className="hidden md:flex justify-center">
            <DesktopNavigation />
          </div>

          {/* Right — hamburger on mobile, full actions on desktop */}
          <div className="flex ml-auto md:ml-0 justify-end items-center gap-3">
            <NavigationActions />
            <MobileNavigation />
          </div>

        </div>
      </div>
    </header>
  );
}