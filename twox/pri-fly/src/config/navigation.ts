

export interface NavChild {
  label: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  children?: NavChild[];
}

export const navLinks: NavLink[] = [
  {
    label: "Why Altivo",
    path: "/why-altivo",
    children: [
      { label: "For Brokers", path: "/why-altivo/brokers" },
      { label: "For Operators", path: "/why-altivo/operators" },
    ],
  },
  {
    label: "Payments",
    path: "/payments",
    children: [
      { label: "How Payments Work", path: "/payments/how-it-works" },
      { label: "Security", path: "/payments/security" },
      { label: "FAQ Payments", path: "/payments/faq-payments"},
      { label: "Payments For Operators", path: "/payments/operators" },
    ],
  },
  {
    label: "Join Altivo",
    path: "/join-altivo",
    children: [
      { label: "As a Broker", path: "/join-altivo/brokers" },
      { label: "As an Operator", path: "/join-altivo/operators" },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Blog", path: "/resources/blog" },
      { label: "FAQs", path: "/resources/faqs" },
      { label: "Guides", path: "/resources/guides" },
      { label: "APIs", path: "/resources/apis" },
      { label: "Dev Portal", path: "/resources/dev-portal" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    children: [
      { label: "Submit Ticket", path: "/contact/submit-ticket" },
      { label: "Request Callback", path: "/contact/request-callback" },
      { label: "Email Us", path: "/contact/email" },
    ]
  },
  {
    label: "Pricing", path: "/pricing",
  }
];
