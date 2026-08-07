import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div className="relative hidden w-64 sm:block">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
      />
      <input
        type="search"
        placeholder="Search space, folder, file etc"
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] py-2 pl-9 pr-16 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]"
      />
      <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
        alt+f
      </kbd>
    </div>
  );
}
