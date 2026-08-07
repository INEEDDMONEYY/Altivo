import { documentRequirements } from "../data/documents";
import DocumentRequirementCard from "./DocumentRequirementCard";

export default function DocumentSection() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-500">
            Operator Verification
          </p>

          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Required Aviation Documentation
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Altivo verifies every operator through aviation documentation
            review to maintain a trusted private aviation network.
          </p>
        </div>


        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {documentRequirements.map((document) => (
            <DocumentRequirementCard
              key={document.id}
              document={document}
            />
          ))}
        </div>

      </div>
    </section>
  );
}