import type { ReactNode } from "react";

interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

export default function VerticalTimeline({ items }: VerticalTimelineProps) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-slate-200 pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span className="absolute -left-[1.65rem] flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
            {item.icon}
          </span>
          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
          {item.description && <p className="mt-1 text-sm text-slate-500">{item.description}</p>}
        </li>
      ))}
    </ol>
  );
}
