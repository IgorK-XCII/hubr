import { useCallback, useRef } from 'react';

export const useDebounce = <T extends (...args: any[]) => any>(fn: T, delay = 200) => {
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback((...args: Parameters<T>) => {
    if (timerIdRef.current) clearTimeout(timerIdRef.current);

    timerIdRef.current = setTimeout(() => {
      fn(...args);
      timerIdRef.current = null;
    }, delay);
  }, [fn, delay]);
};
