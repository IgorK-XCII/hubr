import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './NotFoundPage.module.scss';
import { Page } from '@/shared/ui';

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page className={clsx([cls.notFoundPage])}>
      {t('notFound')}
    </Page>
  );
};
