import type { RFQ } from "../types";

// TODO: connect to the backend API once it's available
export async function getRFQs(): Promise<RFQ[]> {
  return [];
}

export async function getRFQById(id: string): Promise<RFQ | null> {
  console.warn("getRFQById not implemented yet", id);
  return null;
}

export async function createRFQ(payload: Partial<RFQ>): Promise<RFQ> {
  console.warn("createRFQ not implemented yet", payload);
  throw new Error("createRFQ not implemented yet");
}
