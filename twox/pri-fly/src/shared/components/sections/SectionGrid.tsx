import type { ReactNode } from "react";

interface SectionGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export default function SectionGrid({ children, columns = 3, className = "" }: SectionGridProps) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${columnClasses[columns]} ${className}`}>{children}</div>
  );
}
