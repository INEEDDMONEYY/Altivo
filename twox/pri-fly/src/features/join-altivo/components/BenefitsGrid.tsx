import { ShieldCheck, Zap, Globe2, TrendingUp } from "lucide-react";
import type { JoinBenefit } from "../types";

const icons = [
  ShieldCheck,
  Zap,
  Globe2,
  TrendingUp,
];

interface BenefitsGridProps {
  eyebrow: string;
  heading: string;
  description: string;
  benefits: JoinBenefit[];
}

export default function BenefitsGrid({
  eyebrow,
  heading,
  description,
  benefits,
}: BenefitsGridProps) {
  return (
    <section className="w-full py-16 sm:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-wide
              text-red-500
            "
          >
            {eyebrow}
          </p>


          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            {heading}
          </h2>


          <p className="mt-4 text-slate-600">
            {description}
          </p>

        </div>


        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {benefits.map((benefit, index) => {

            const Icon = icons[index];

            return (
              <article
                key={benefit.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-500
                  "
                >
                  <Icon className="h-6 w-6" />
                </div>


                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>


                <p className="text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>

              </article>
            );

          })}

        </div>

      </div>

    </section>
  );
}