import JoinHero from "../components/JoinHero";
import BenefitsGrid from "../components/BenefitsGrid";
import VerificationSteps from "../components/VerificationSteps";
import BrokerRequirementSection from "../components/BrokerRequirementSection";
import DocumentUploadForm from "../components/DocumentUploadForm";
import { brokerBenefits } from "../data/benefits";

export default function JoinAltivoBrokersPage() {
  return (
    <main className="w-full">

      <JoinHero
        eyebrow="Join Altivo Brokers"
        title="Grow your charter business with a trusted operator network."
        description="
          Altivo connects aviation brokers with verified operators,
          helping you source aircraft faster and deliver better client
          experiences.
        "
      />

      <BenefitsGrid
        eyebrow="Broker Benefits"
        heading="Grow your charter business with Altivo"
        description="Source qualified aircraft faster while building credibility inside a verified private aviation marketplace."
        benefits={brokerBenefits}
      />

      <VerificationSteps />

      <BrokerRequirementSection />

      <DocumentUploadForm
        heading="Submit Broker Verification Documents"
        description="Provide your business and brokerage documentation so the Altivo team can verify your company and grant marketplace access."
        licenseLabel="Business License Number"
        licensePlaceholder="License or registration number"
        documents={[
          "Business Registration Certificate",
          "Proof of Business Address",
          "Broker License or Certification (if applicable)",
          "Professional References",
          "Signed Terms of Service Agreement",
        ]}
        submitLabel="Submit Verification Request"
      />

    </main>
  );
}