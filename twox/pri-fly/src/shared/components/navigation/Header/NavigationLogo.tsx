import { Link } from "react-router-dom";
import AltivoIcon from '../../../../assets/icons/altivo-logo-icon.png'

export default function NavigationLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-red-400 to-gray-400 shadow-[0_0_14px_rgba(255,255,255,0.5)]">
        <img src={AltivoIcon} alt="Altivo Logo" className="w-5 h-5" />
      </div>
      <span className="font-semibold tracking-tight text-white text-[15px]">
        Altivo
      </span>
    </Link>
  );
}