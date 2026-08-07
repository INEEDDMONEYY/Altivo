import CTA from "../../features/home/components/CTA";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

/** Homepage-styled marketing page template; real copy to be filled in per page. */
export default function PlaceholderPage({ eyebrow, title, description, image }: PlaceholderPageProps) {
  return (
    <div className="flex w-full flex-col">
      <section
        className="relative isolate flex w-screen left-1/2 min-h-[45vh] -translate-x-1/2 items-center overflow-hidden sm:min-h-[55vh]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-white/90" />
        <div className="pointer-events-none absolute left-1/2 top-16 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-red-400/10 blur-[160px]" />

        <div className="container relative z-10 py-16 text-center sm:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">{eyebrow}</p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {description ?? "Content coming soon."}
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-base leading-8 text-slate-600">
            This page is a placeholder — final content for &ldquo;{title}&rdquo; goes here.
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
}
