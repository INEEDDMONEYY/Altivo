import { Outlet } from "react-router-dom";

/**
 * Centered, chrome-free layout used for login/register/password-reset pages.
 */
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
