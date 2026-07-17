import type { ReactNode } from "react";

interface SectionHeroProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function SectionHero({ title, description, actions }: SectionHeroProps) {
  return (
    <section className="w-full bg-slate-900 py-16 text-center text-white sm:py-24">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        {description && <p className="max-w-2xl text-base text-slate-300">{description}</p>}
        {actions && <div className="mt-4 flex items-center gap-4">{actions}</div>}
      </div>
    </section>
  );
}
