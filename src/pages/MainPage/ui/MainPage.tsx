import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets';

export const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('main')}
    </Page>
  );
};
