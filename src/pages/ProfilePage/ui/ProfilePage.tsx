import { useLazyReducersLoader } from '@/shared/lib';
import { LazyReducers } from '@/app/providers';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';

const lazyReducers: LazyReducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  useLazyReducersLoader(lazyReducers);

  return (
    <div>
      <EditableProfileCard />
    </div>
  );
};
