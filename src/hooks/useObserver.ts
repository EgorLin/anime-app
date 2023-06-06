import { useEffect, useRef } from "react";
import { RequestStatuses } from "../const/requestStatuses";

export function useObserver(callback: () => void, status?: string) {
  const observer = useRef<IntersectionObserver>();
  const trigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === RequestStatuses.LOADING) return;
    if (observer.current) observer.current.disconnect();
    const options = {
      threshold: 1,
    };
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);
    if (trigger.current) {
      observer.current.observe(trigger.current);
    }
  }, [status]);

  return trigger;
}
