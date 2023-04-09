import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui';

export const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Page>{t('about')}</Page>;
};
