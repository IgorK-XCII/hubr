import { FC } from 'react';
import { clsx } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
 className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={clsx([cls.pageLoader, className])}>
    <Loader />
  </div>
);
