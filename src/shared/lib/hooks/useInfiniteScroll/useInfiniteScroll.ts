import { MutableRefObject, useEffect } from 'react';
import { isStorybookMode } from '../../isStorybookMode';

interface useInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (opts: useInfiniteScrollOptions) => {
  const { callback, triggerRef, wrapperRef } = opts;

  useEffect(() => {
    if (!callback || isStorybookMode()) return;

    const triggerEl = triggerRef.current;
    const wrapperEl = wrapperRef.current;

    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerEl);

    return () => {
      observer.unobserve(wrapperEl);
    };
  }, [wrapperRef, triggerRef, callback]);
};
