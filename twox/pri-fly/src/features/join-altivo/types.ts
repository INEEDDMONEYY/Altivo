export interface JoinBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface VerificationStep {
  step: number;
  title: string;
  description: string;
}

export interface DocumentRequirement {
  id: string;
  title: string;
  purpose: string;
  requiredDocuments: string[];
  optional?: boolean;
}

export interface UploadCategory {
  id: string;
  title: string;
  description?: string;
  acceptedFormats?: string[];
}