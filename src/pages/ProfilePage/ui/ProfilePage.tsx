import { useTranslation } from 'react-i18next';
import { LazyReducers, useLazyReducersLoader } from '@/shared/lib';
import { profileReducer } from '@/entities';

const lazyReducers: LazyReducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const { t } = useTranslation();
  useLazyReducersLoader(lazyReducers);

  return (
    <div>
      {t('profilePage')}
    </div>
  );
};
