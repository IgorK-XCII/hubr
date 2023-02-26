import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.notFoundPage])}>
      {t('notFound')}
    </div>
  );
};
