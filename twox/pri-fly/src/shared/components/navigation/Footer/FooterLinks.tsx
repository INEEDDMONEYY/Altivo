interface FooterLinksProps {
  title: string;
  links: { label: string; href: string }[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm text-slate-400 hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
