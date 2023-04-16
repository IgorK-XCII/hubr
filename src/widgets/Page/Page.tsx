import {
  FC, memo, MutableRefObject, UIEvent, useEffect, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { clsx } from '@/shared/lib/clsx';
import cls from './Page.module.scss';
import {
  isStorybookMode,
  useAppDispatch, useAppSelector, useInfiniteScroll, useThrottle,
} from '@/shared/lib';
import { scrollPositionSaverActions, getScrollSaverPositionByPath } from '@/features/ScrollPositionSaver';

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo((props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const scrollPosition = useAppSelector(
    (state) => getScrollSaverPositionByPath(state, pathname),
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetScrollPosition = useThrottle((position: number) => dispatch(
    scrollPositionSaverActions.setScrollPosition({
      path: pathname,
      position,
    }),
  ));

  const handleScroll = (
    e: UIEvent<HTMLElement>,
  ) => handleSetScrollPosition(e.currentTarget.scrollTop);

  return (
    <section
      ref={wrapperRef}
      className={clsx([cls.page, className])}
      onScroll={handleScroll}
    >
      {children}
      {onScrollEnd && (
        <div ref={triggerRef} />
      )}
    </section>
  );
});
