import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/icons/altivo-logo-icon.png";
import heroImage from "../../assets/images/in-sky.png"; // placeholder — swap for final image

/**
 * Split-screen layout used for login/register/password-reset pages.
 * Left: whichever auth page is routed (via Outlet). Right: brand imagery,
 * hidden below md so mobile gets a clean full-width form.
 */
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* LEFT — form panel */}
      <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-1/2 md:px-16 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <Link to="/">
            <img src={logo} alt="Altivo" className="h-8 w-auto" />
          </Link>
          <div className="mt-8">
            <Outlet />
          </div>
        </div>
      </div>

      {/* RIGHT — image + testimonial, hidden below md */}
      <div className="relative hidden overflow-hidden md:block md:w-1/2">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-8 top-8">
          <Link to="/">
            <img src={logo} alt="Altivo" className="h-7 w-auto brightness-0 invert" />
          </Link>
        </div>

        <div className="absolute inset-x-8 bottom-10 text-white">
          <p className="text-lg text-white font-medium leading-relaxed">
            "Altivo cut our charter turnaround time in half. Booking a jet finally feels as
            fast as it should."
          </p>
          <div className="mt-4">
            <p className="text-sm text-white font-semibold">Amélie Laurent</p>
            <p className="text-sm text-white/70">Founder, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
}