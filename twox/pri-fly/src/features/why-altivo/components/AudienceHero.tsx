import PageContainer from "../../../shared/components/layouts/PageContainer";
import MaxWidth from "../../../shared/components/layouts/MaxWidth";

interface AudienceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export default function AudienceHero({
  eyebrow,
  title,
  description,
  image,
}: AudienceHeroProps) {

  return (
    <section className="relative w-full overflow-hidden bg-[#06080f]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[160px]" />

      <PageContainer className="relative py-20 sm:py-28">

        <MaxWidth>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <div className="space-y-6">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                {eyebrow}
              </p>


              <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
                {title}
              </h1>


              <p className="text-lg leading-relaxed text-white/80">
                {description}
              </p>


              <div className="pt-4">

                <button className="rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md">
                  Get Started
                </button>

              </div>

            </div>

            {/* Image */}
            <div className="relative">

              <div className="absolute -inset-8 rounded-full bg-red-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">

                <img
                  src={image}
                  alt={title}
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </MaxWidth>

      </PageContainer>

    </section>
  );
}