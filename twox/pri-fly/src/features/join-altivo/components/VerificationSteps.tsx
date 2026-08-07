import { CheckCircle2 } from "lucide-react";
import { verificationSteps } from "../data/verification";

export default function VerificationSteps() {
  return (
    <section className="w-full bg-slate-50 py-16 sm:py-24">

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
            Verification Process
          </p>


          <h2
            className="
              text-3xl
              font-semibold
              text-slate-900
              sm:text-4xl
            "
          >
            Become a verified Altivo operator
          </h2>


          <p className="mt-4 text-slate-600">
            Our verification process ensures every operator on the platform
            meets aviation compliance and operational standards.
          </p>

        </div>


        <div
          className="
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {verificationSteps.map((step) => (

            <article
              key={step.step}
              className="
                relative
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
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
                  rounded-full
                  bg-red-50
                  text-red-500
                "
              >
                <CheckCircle2 className="h-6 w-6" />
              </div>


              <span
                className="
                  absolute
                  right-6
                  top-6
                  text-4xl
                  font-bold
                  text-slate-100
                "
              >
                {step.step}
              </span>


              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>


              <p className="text-sm leading-6 text-slate-600">
                {step.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}