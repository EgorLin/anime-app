import { useCallback, useRef } from "react";

function useDebounce(
  callback: (...args: any[]) => void,
  delay: number
): ReturnType<typeof useCallback> {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const debounceCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
}

export default useDebounce;
