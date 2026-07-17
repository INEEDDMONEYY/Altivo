import type { Operator } from "../types";

// TODO: connect to the backend API once it's available
export async function getOperators(): Promise<Operator[]> {
  return [];
}

export async function getOperatorById(id: string): Promise<Operator | null> {
  console.warn("getOperatorById not implemented yet", id);
  return null;
}
