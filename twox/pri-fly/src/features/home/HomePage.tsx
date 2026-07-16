import Hero from "./components/Hero";
import Stats from "./components/Stats";
import TrustStrip from "./components/TrustStrip";
import HowItWorks from "./components/HowItWorks";
import AircraftGrid from "./components/AircraftGrid";
import CTA from "./components/CTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <Stats />
      <HowItWorks />
      <AircraftGrid />
      <CTA />
    </div>
  );
}