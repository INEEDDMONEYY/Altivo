import { useState, type FormEvent } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: wire up to the backend once the API is connected
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <h3 className="text-lg font-semibold text-slate-900">Application received</h3>
        <p className="mt-2 text-sm text-slate-500">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* TODO: add application form fields */}
      <button
        type="submit"
        className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
      >
        Submit Application
      </button>
    </form>
  );
}
