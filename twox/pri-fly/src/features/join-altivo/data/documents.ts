import type { DocumentRequirement } from "../types";

export const documentRequirements: DocumentRequirement[] = [
  {
    id: "aoc",
    title: "Air Operator Certificate (AOC)",
    purpose:
      "Confirms the operator is legally authorized to conduct commercial air transport operations.",
    requiredDocuments: [
      "Full AOC document",
      "Issuing authority (FAA, EASA, Transport Canada, etc.)",
      "Expiration date",
      "Operations Specifications (OpsSpecs)",
    ],
  },

  {
    id: "opsspecs",
    title: "Operations Specifications (OpsSpecs)",
    purpose:
      "Confirms the operator is approved for specific aircraft types, regions, and operational capabilities.",
    requiredDocuments: [
      "OpsSpecs PDF",
      "Authorized aircraft types",
      "Maintenance program approval",
      "MEL (Minimum Equipment List) authorization",
    ],
  },

  {
    id: "registration",
    title: "Aircraft Registration Certificates",
    purpose:
      "Verifies that each aircraft is legally registered with the appropriate aviation authority.",
    requiredDocuments: [
      "Registration certificate",
      "Registration number (tail number)",
      "Owner/operator name",
      "Country of registry",
    ],
  },

  {
    id: "airworthiness",
    title: "Airworthiness Certificates",
    purpose:
      "Confirms the aircraft is approved and safe for flight operations.",
    requiredDocuments: [
      "Standard Airworthiness Certificate",
      "Expiration or renewal date",
      "Aircraft category",
    ],
  },

  {
    id: "insurance",
    title: "Insurance Documentation",
    purpose:
      "Verifies that the operator meets required liability and hull insurance standards.",
    requiredDocuments: [
      "Certificate of insurance",
      "Liability coverage amounts",
      "Hull coverage",
      "Expiration date",
      "Insurer contact details",
    ],
  },

  {
    id: "maintenance",
    title: "Maintenance & Safety Compliance",
    purpose:
      "Confirms aircraft are maintained under approved aviation safety programs.",
    requiredDocuments: [
      "Approved maintenance program",
      "Last major inspection records",
      "Safety Management System (SMS) documentation",
      "CAMO certificate (EASA regions)",
    ],
  },

  {
    id: "crew",
    title: "Pilot & Crew Credentials",
    purpose:
      "Required for operators providing crewed charter services.",
    requiredDocuments: [
      "Pilot licenses (ATPL/CPL)",
      "Medical certificates",
      "Training records",
      "Recurrent training compliance",
      "Drug and alcohol testing compliance",
    ],
    optional: true,
  },

  {
    id: "company",
    title: "Company Legal Documents",
    purpose:
      "Verifies the operator as a legitimate registered business entity.",
    requiredDocuments: [
      "Business registration",
      "Tax ID / VAT number",
      "Proof of address",
      "Authorized signatory documentation",
      "General liability insurance",
    ],
  },

  {
    id: "recommended",
    title: "Recommended Supporting Documents",
    purpose:
      "Additional documents that increase trust and reduce operational risk.",
    requiredDocuments: [
      "Noise compliance certificates",
      "Weight and balance documentation",
      "Aircraft Flight Manual (AFM)",
      "Minimum Equipment List (MEL)",
      "Operational control manual",
      "Emergency response plan",
      "Charter agreements or terms of carriage",
    ],
    optional: true,
  },
];