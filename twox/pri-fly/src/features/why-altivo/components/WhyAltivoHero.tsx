import { ArrowRight, PlayCircle } from "lucide-react";

import PageContainer from "../../../shared/components/layouts/PageContainer";
import MaxWidth from "../../../shared/components/layouts/MaxWidth";
import Button from "../../../shared/ui/Button";

import heroImage from "../../../assets/images/Interior-2.png";


export default function WhyAltivoHero() {
  return (
    <section className="w-full overflow-hidden bg-[#06080f]">
      <PageContainer className="py-16 sm:py-24">
        <MaxWidth>
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Content */}
            <div className="space-y-6">

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-400">
                Why Altivo
              </p>

              <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Private aviation,
                <span className="block text-red-500">
                  without the wait.
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Altivo connects brokers and operators through a faster RFQ
                network built to reduce response times, improve visibility,
                and simplify aircraft sourcing.
              </p>


              <div className="flex flex-wrap gap-4 pt-4">

                <Button
                  className="
                    rounded-xl
                    bg-red-500
                    px-6
                    py-3
                    text-white
                    hover:bg-red-600
                  "
                >
                  Join Altivo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>


                <Button
                  variant="secondary"
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3
                    text-white
                    backdrop-blur
                    hover:bg-white/10
                  "
                >
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Explore Platform
                </Button>

              </div>

            </div>


            {/* Image */}
            <div className="relative">

              <div
                className="
                  absolute
                  -inset-8
                  rounded-full
                  bg-red-500/20
                  blur-3xl
                "
              />


              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  shadow-2xl
                "
              >

                <img
                  src={heroImage}
                  alt="Private aircraft flying above clouds"
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    sm:h-[520px]
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#06080f]
                    via-transparent
                    to-transparent
                  "
                />

              </div>

            </div>

          </div>
        </MaxWidth>
      </PageContainer>
    </section>
  );
}