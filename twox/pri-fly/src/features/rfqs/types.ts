export type RFQStatus = "draft" | "pending" | "quoted" | "accepted" | "declined";

export interface RFQ {
  id: string;
  status: RFQStatus;
  // TODO: extend with real RFQ fields
}
