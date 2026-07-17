import type { ReactNode } from "react";

interface SectionCTAProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function SectionCTA({ title, description, actions }: SectionCTAProps) {
  return (
    <section className="w-full bg-sky-500 py-16 text-center text-white">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description && <p className="max-w-xl text-base text-sky-50">{description}</p>}
        {actions && <div className="mt-2 flex items-center gap-4">{actions}</div>}
      </div>
    </section>
  );
}
