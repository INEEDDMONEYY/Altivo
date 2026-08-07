import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadCrumbsProps {
  items: Crumb[];
}

export default function BreadCrumbs({ items }: BreadCrumbsProps) {
  return (
    <nav className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1">
          {item.href ? (
            <Link to={item.href} className="hover:text-[var(--text-primary)]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text-primary)]">{item.label}</span>
          )}
          {index < items.length - 1 && <ChevronRight size={14} />}
        </span>
      ))}
    </nav>
  );
}
