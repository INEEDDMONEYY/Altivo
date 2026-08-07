import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuthStore } from "../../store/authStore";
import { getErrorMessage } from "../../services/apiClient";
import { getRoleHomePath } from "../../config/permissions";
import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const from = (location.state as { from?: Location })?.from?.pathname;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await login({ email, password });
      const role = useAuthStore.getState().user?.role;
      navigate(from ?? getRoleHomePath(role), { replace: true });
    } catch (err) {
      setError(getErrorMessage(err, "Invalid credentials"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to your Altivo dashboard.</p>
      </div>

      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <Input
        id="email"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        placeholder="you@company.com"
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        placeholder="••••••••"
        required
      />

      <div className="flex justify-end text-sm">
        <Link to="/forgot-password" className="text-slate-500 hover:text-slate-700 hover:underline">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Sign in
      </Button>

      <p className="text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-slate-900 hover:underline">
          Create account
        </Link>
      </p>
    </form>
  );
}