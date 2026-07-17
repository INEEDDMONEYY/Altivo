import type { ReactNode } from "react";

interface DialogProps {
  open: boolean;
  title?: string;
  description?: string;
  children?: ReactNode;
  onClose: () => void;
}

export default function Dialog({ open, title, description, children, onClose }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        {title && <h2 className="text-lg font-semibold text-slate-900">{title}</h2>}
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
        {children && <div className="mt-4">{children}</div>}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-slate-100 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}
