import JoinHero from "../components/JoinHero";
import BenefitsGrid from "../components/BenefitsGrid";
import VerificationSteps from "../components/VerificationSteps";
import DocumentSection from "../components/DocumentSection";
import DocumentUploadForm from "../components/DocumentUploadForm";
import { operatorBenefits } from "../data/benefits";

export default function JoinAltivoOperatorsPage() {
  return (
    <main className="w-full">

      <JoinHero
        eyebrow="Join Altivo"
        title="Connect your aviation operation with qualified demand."
        description="Altivo connects verified aircraft operators with brokers who need reliable charter solutions. Join a trusted network built around speed, transparency, and operational confidence."
      />

      <BenefitsGrid
        eyebrow="Operator Benefits"
        heading="Grow your aviation business with Altivo"
        description="Access qualified opportunities while building credibility inside a verified private aviation marketplace."
        benefits={operatorBenefits}
      />

      <VerificationSteps />

      <DocumentSection />

      <DocumentUploadForm
        heading="Submit Operator Verification Documents"
        description="Provide your operational documentation so the Altivo team can verify your company and aircraft eligibility."
        licenseLabel="AOC Number"
        licensePlaceholder="Certificate number"
        documents={[
          "Air Operator Certificate (AOC)",
          "Operations Specifications",
          "Aircraft Registration Certificates",
          "Airworthiness Certificates",
          "Insurance Documentation",
          "Maintenance & Safety Records",
        ]}
        submitLabel="Submit Verification Request"
      />

    </main>
  );
}