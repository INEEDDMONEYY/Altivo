import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../store/authStore";
import { getErrorMessage } from "../../../services/apiClient";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

/**
 * Core account-creation form. Marketing sections (FAQ, benefits, legal, etc.)
 * are separate presentational components — this only handles the submission
 * that talks to the backend.
 */
export default function RegisterApplication() {
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await register(form);
      navigate("/login", { replace: true });
    } catch (err) {
      setError(getErrorMessage(err, "Registration failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-slate-900">Create your account</h1>

      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}

      <div className="grid grid-cols-2 gap-3">
        <Input
          id="firstName"
          label="First name"
          value={form.firstName}
          onChange={handleChange("firstName")}
          autoComplete="given-name"
        />
        <Input
          id="lastName"
          label="Last name"
          value={form.lastName}
          onChange={handleChange("lastName")}
          autoComplete="family-name"
        />
      </div>

      <Input
        id="email"
        type="email"
        label="Email"
        value={form.email}
        onChange={handleChange("email")}
        autoComplete="email"
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        value={form.password}
        onChange={handleChange("password")}
        autoComplete="new-password"
        minLength={8}
        required
      />

      <Button type="submit" isLoading={isSubmitting}>
        Create account
      </Button>

      <Link to="/login" className="text-center text-sm text-slate-600 hover:underline">
        Already have an account? Sign in
      </Link>
    </form>
  );
}
