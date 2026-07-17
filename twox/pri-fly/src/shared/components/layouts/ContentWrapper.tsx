import type { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ContentWrapper({ children, className = "" }: ContentWrapperProps) {
  return <div className={`flex flex-col gap-6 ${className}`}>{children}</div>;
}
