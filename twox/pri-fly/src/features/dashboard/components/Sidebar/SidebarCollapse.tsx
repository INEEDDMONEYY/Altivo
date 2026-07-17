import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface SidebarCollapseProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarCollapse({ collapsed, onToggle }: SidebarCollapseProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className="flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100"
    >
      {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
    </button>
  );
}
