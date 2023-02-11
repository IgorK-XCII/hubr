import { FC } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
 className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <span className={clsx([cls.loader, className])} />
);
