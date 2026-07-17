import { ChevronDown, User } from "lucide-react";

export default function UserMenu() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
        <User size={16} />
      </span>
      <ChevronDown size={14} />
    </button>
  );
}
