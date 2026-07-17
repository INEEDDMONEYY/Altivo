import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";

// TODO: swap in real brand icons (e.g. simple-icons) once social links are finalized
const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Social" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a key={label} href={href} aria-label={label} className="text-slate-400 hover:text-white">
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
