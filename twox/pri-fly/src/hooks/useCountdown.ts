import { useEffect, useState } from "react";

export function useCountdown(targetDate: Date | string) {
  const target = typeof targetDate === "string" ? new Date(targetDate) : targetDate;
  const [remaining, setRemaining] = useState(() => Math.max(target.getTime() - Date.now(), 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.max(target.getTime() - Date.now(), 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  return { days, hours, minutes, seconds, isComplete: remaining === 0 };
}
