import type { ReactNode } from "react";

interface DashboardContainerProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardContainer({ children, className = "" }: DashboardContainerProps) {
  return <div className={`flex flex-col gap-6 ${className}`}>{children}</div>;
}
