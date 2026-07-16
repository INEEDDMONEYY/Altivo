import SectionWrapper from "./SectionWrapper";

export default function TrustStrip() {
  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-24 border-y border-slate-100">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-slate-500">
        <span>✓ Verified Operators</span>
        <span>🌍 Global Coverage</span>
        <span>⚡ Instant RFQs</span>
        <span>💰 Transparent Pricing</span>
        <span>🕐 24/7 Support Network</span>
      </div>
    </SectionWrapper>
  );
}