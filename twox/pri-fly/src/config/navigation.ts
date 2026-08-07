import { Sparkles, CreditCard, UserPlus, BookOpen, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavChild {
  label: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  icon: LucideIcon;
  children?: NavChild[];
}

export const navLinks: NavLink[] = [
  {
    label: "Why Altivo",
    path: "/why-altivo",
    icon: Sparkles,
    children: [
      { label: "For Brokers", path: "/why-altivo/brokers" },
      { label: "For Operators", path: "/why-altivo/operators" },
    ],
  },
  {
    label: "Payments",
    path: "/payments",
    icon: CreditCard,
    children: [
      { label: "How It Works", path: "/payments/how-it-works" },
      { label: "Security", path: "/payments/security" },
    ],
  },
  {
    label: "Join Altivo",
    path: "/join-altivo",
    icon: UserPlus,
    children: [
      { label: "As a Broker", path: "/join-altivo/brokers" },
      { label: "As an Operator", path: "/join-altivo/operators" },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    icon: BookOpen,
    children: [
      { label: "Blog", path: "/resources/blog" },
      { label: "FAQs", path: "/resources/faqs" },
      { label: "Guides", path: "/resources/guides" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    icon: Mail,
  },
];
