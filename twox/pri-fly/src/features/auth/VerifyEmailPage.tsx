import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import * as authService from "../../services/auth";
import { getErrorMessage } from "../../services/apiClient";

type Status = "verifying" | "success" | "error";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<Status>("verifying");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setError("Missing verification token.");
      return;
    }

    authService
      .verifyEmail({ token })
      .then(() => setStatus("success"))
      .catch((err) => {
        setStatus("error");
        setError(getErrorMessage(err, "Invalid or expired verification link."));
      });
  }, [token]);

  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-xl font-semibold text-slate-900">Email verification</h1>

      {status === "verifying" && <p className="text-sm text-slate-600">Verifying your email...</p>}

      {status === "success" && (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Your email has been verified. You can now sign in.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
      )}

      <Link to="/login" className="text-sm text-slate-900 hover:underline">
        Back to sign in
      </Link>
    </div>
  );
}
