import type { DocumentRequirement } from "../types";

export const brokerRequirements: DocumentRequirement[] = [
  {
    id: "business",
    title: "Business Registration",
    purpose:
      "Confirms the brokerage is operating as a legitimate business entity.",
    requiredDocuments: [
      "Business registration certificate",
      "Company legal name",
      "Business address",
      "Authorized representative",
    ],
  },

  {
    id: "experience",
    title: "Broker Credentials",
    purpose:
      "Helps verify aviation industry experience and professional background.",
    requiredDocuments: [
      "Years operating as a broker",
      "Industry certifications (if applicable)",
      "Professional references",
    ],
  },

  {
    id: "compliance",
    title: "Compliance Information",
    purpose:
      "Ensures brokers understand aviation sales and charter requirements.",
    requiredDocuments: [
      "Terms of service agreement",
      "Client communication standards",
      "Operational policies",
    ],
  },
];