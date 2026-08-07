// Must match the backend's constants/aircraft/operatorStatuses.js exactly.
export type OperatorStatus = "active" | "inactive" | "suspended" | "pending_verification";

export interface OperatorResponseMetrics {
  avgResponseTimeMinutes: number;
  totalResponses: number;
  acceptanceRate: number;
}

// Mirrors models/Operator.js
export interface Operator {
  id: string;
  organizationId: string;
  name: string;
  email?: string;
  phone?: string;
  status: OperatorStatus;
  regionsServed: string[];
  aircraftCategories: string[];
  bases: string[];
  responseScore: number;
  responseMetrics: OperatorResponseMetrics;
  createdAt: string;
  updatedAt: string;
}

export interface OperatorListParams {
  page?: number;
  limit?: number;
  status?: OperatorStatus;
}

