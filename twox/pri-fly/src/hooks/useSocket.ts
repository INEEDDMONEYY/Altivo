import { useEffect, useState } from "react";

// TODO: connect to the real-time backend (Socket.IO/WebSocket) once it's available
export function useSocket(url?: string) {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!url) return;
    // Placeholder: no real connection is established yet.
    setConnected(false);
  }, [url]);

  return { connected };
}
