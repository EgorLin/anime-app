import { useEffect, useRef, useState } from "react";

export function useObserver(callback: () => void) {
  const trigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, options);
    if (trigger.current) {
      observer.observe(trigger.current);
    }
  }, []);

  return trigger;
}
