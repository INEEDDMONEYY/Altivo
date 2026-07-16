import { Link } from "react-router-dom";
import { PlaneTakeoff } from "lucide-react";

export default function NavigationLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 shadow-[0_0_14px_rgba(56,189,248,0.5)]">
        <PlaneTakeoff size={20} className="text-white" />
      </div>
      <span className="font-semibold tracking-tight text-white text-[15px]">
        Altivo
      </span>
    </Link>
  );
}