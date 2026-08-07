import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/above-mountians.png";

interface JoinHeroAction {
  label: string;
  to: string;
}

interface JoinHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: JoinHeroAction[];
}

export default function JoinHero({ eyebrow, title, description, actions }: JoinHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#06080f] py-20 sm:py-28">

      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Private aircraft flying above mountains"
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-[#06080f]/70" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl">

          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-red-400
            "
          >
            {eyebrow}
          </p>


          <h1
            className="
              text-4xl
              font-semibold
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {title}
          </h1>


          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-white/80
            "
          >
            {description}
          </p>


          <div className="mt-8 flex flex-wrap gap-4">

            {actions?.map((action, index) => (
              <Link
                key={action.to}
                to={action.to}
                className={
                  index === 0
                    ? "flex items-center rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md"
                    : "rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
                }
              >
                {action.label}
                {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Link>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}