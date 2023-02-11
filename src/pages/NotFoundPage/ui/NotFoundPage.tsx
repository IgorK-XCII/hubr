import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
 className?: string;
}

console.log(cls);

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.notFoundPage, className])}>
      {t('notFound')}
    </div>
  );
};
