import { FC, MutableRefObject, useRef } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/lib';

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={clsx([cls.page, className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
