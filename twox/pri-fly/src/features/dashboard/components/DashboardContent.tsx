import type { ReactNode } from "react";

interface DashboardContentProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardContent({ children, className = "" }: DashboardContentProps) {
  return <div className={`rounded-xl border border-slate-200 bg-white p-6 ${className}`}>{children}</div>;
}
