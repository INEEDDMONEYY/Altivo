import { brokerRequirements } from "../data/brokerRequirements";
import DocumentRequirementCard from "./DocumentRequirementCard";

export default function BrokerRequirementSection() {
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
            Broker Verification
          </p>

          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Join as a verified aviation broker
          </h2>

          <p className="mt-4 text-slate-600">
            Altivo verifies brokers to maintain a trusted marketplace for
            operators and aviation professionals.
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

          {brokerRequirements.map((requirement) => (
            <DocumentRequirementCard
              key={requirement.id}
              document={requirement}
            />
          ))}

        </div>

      </div>

    </section>
  );
}