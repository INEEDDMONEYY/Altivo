import { useEffect, useRef } from "react";

export function useInfiniteScroll(onIntersect: () => void, enabled = true) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onIntersect();
    });

    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [onIntersect, enabled]);

  return targetRef;
}
