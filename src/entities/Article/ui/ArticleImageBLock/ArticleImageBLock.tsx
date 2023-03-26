import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleImageBLock.module.scss';

interface ArticleImageBLockProps {
  className?: string;
}

export const ArticleImageBLock: FC<ArticleImageBLockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.articleImageBLock, className])} />
  );
};
