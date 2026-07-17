interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-base text-slate-500">{description}</p>}
    </div>
  );
}
