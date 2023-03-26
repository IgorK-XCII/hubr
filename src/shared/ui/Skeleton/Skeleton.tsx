import { CSSProperties, FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    className,
    height,
    width,
    border,
  } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return (
    <div style={styles} className={clsx([cls.skeleton, className])} />
  );
};
