import { PlaneTakeoff } from "lucide-react";

export default function FooterLogo() {
  return (
    <div className="flex items-center gap-2">
      <PlaneTakeoff size={20} className="text-sky-500" />
      <span className="text-lg font-semibold text-white">Altivo</span>
    </div>
  );
}
