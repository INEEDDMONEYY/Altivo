import { useState, type ReactNode } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Dropdown({ trigger, children, className = "" }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        {trigger}
      </button>
      {open && (
        <div
          className={`absolute right-0 z-20 mt-2 min-w-[10rem] rounded-lg border border-slate-200 bg-white py-1 shadow-lg ${className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
