import SidebarItem, { type SidebarItemProps } from "./SidebarItem";

interface SidebarGroupProps {
  label?: string;
  items: SidebarItemProps[];
  collapsed?: boolean;
}

export default function SidebarGroup({ label, items, collapsed }: SidebarGroupProps) {
  return (
    <div className="mb-6">
      {label && !collapsed && (
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          {label}
        </p>
      )}
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} collapsed={collapsed} />
        ))}
      </div>
    </div>
  );
}
