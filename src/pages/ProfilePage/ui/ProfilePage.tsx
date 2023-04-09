import { useLazyReducersLoader } from '@/shared/lib';
import { LazyReducers } from '@/app/providers';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';
import { Page } from '@/shared/ui';

const lazyReducers: LazyReducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  useLazyReducersLoader(lazyReducers);

  return (
    <Page>
      <EditableProfileCard />
    </Page>
  );
};
