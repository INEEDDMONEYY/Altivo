import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/auth";
import { useAuthStore } from "../../store/authStore";
import type { Role } from "../../config/permissions";

// Roles without a dedicated dashboard yet (DISPATCHER, PILOT, USER) fall
// back to the homepage until those areas are built.
const ROLE_REDIRECTS: Partial<Record<Role, string>> = {
  ADMIN: "/dashboard",
  BROKER: "/broker",
  OPERATOR: "/operator",
};

export default function LoginPage() {
  const navigate = useNavigate();
  const setSession = useAuthStore((s) => s.setSession);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const { user, accessToken, refreshToken } = await login({ email, password });
      setSession(user, accessToken, refreshToken);
      navigate(ROLE_REDIRECTS[user.role] ?? "/", { replace: true });
    } catch (err) {
      // NOTE: assuming your `api` client throws with a `.message` or an
      // Axios-style `err.response.data.message`. Adjust once I see
      // lib/api.ts's error interceptor, if it has one.
      const message =
        (err as any)?.response?.data?.message ?? (err as Error)?.message ?? "Invalid email or password.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[var(--background)] px-4">
      <div className="glass w-full max-w-sm rounded-[var(--radius-lg)] p-8">
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">Welcome back</h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Sign in to your Altivo dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 text-sm outline-none focus:border-[var(--primary)]"
              placeholder="you@company.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-[var(--text-secondary)]">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 text-sm outline-none focus:border-[var(--primary)]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-[var(--danger)]" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={isSubmitting} className="btn-primary mt-2 w-full disabled:opacity-60">
            {isSubmitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-5 flex items-center justify-between text-sm">
          <Link to="/forgot-password" className="text-[var(--primary)] hover:underline">
            Forgot password?
          </Link>
          <Link to="/register" className="text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
            Need an account?
          </Link>
        </div>
      </div>
    </div>
  );
}