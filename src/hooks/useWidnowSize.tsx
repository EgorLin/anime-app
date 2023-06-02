import { useEffect, useState } from "react";

export function useWindowSize(size: number): boolean {
  const [isGreater, setIsGreater] = useState(false);

  useEffect(() => {
    function handleResize() {
      const newCond: boolean = window.innerWidth > size;

      if (newCond !== isGreater) {
        setIsGreater(newCond);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isGreater, size]);

  return isGreater;
}

export function useChangeWindow(): void {
  useEffect(() => {
    function handleResize() { }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}
