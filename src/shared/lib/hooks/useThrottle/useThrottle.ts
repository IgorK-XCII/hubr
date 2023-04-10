import { useCallback, useRef } from 'react';

export const useThrottle = <T extends (...args: any[]) => any>(fn: T, delay = 500) => {
  const throttleRef = useRef<boolean>(false);
  const lastArgsRef = useRef<Parameters<T> | null>(null);

  const callback = useCallback((...args: Parameters<T>) => {
    if (!throttleRef.current) {
      fn(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;

        if (lastArgsRef.current) {
          callback(...lastArgsRef.current);
          lastArgsRef.current = null;
        }
      }, delay);
    } else {
      lastArgsRef.current = args;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, fn]) as T;

  return callback;
};
