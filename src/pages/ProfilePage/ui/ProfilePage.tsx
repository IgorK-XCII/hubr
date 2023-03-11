import { useTranslation } from 'react-i18next';

export const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('profile page')}
    </div>
  );
};
