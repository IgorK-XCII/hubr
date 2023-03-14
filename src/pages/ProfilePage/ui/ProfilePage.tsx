import { useEffect } from 'react';
import { useAppDispatch, useLazyReducersLoader } from '@/shared/lib';
import { LazyReducers } from '@/app/providers';
import { EditableProfileCard, profileReducer, fetchProfileData } from '@/features/EditableProfileCard';

const lazyReducers: LazyReducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  useLazyReducersLoader(lazyReducers);

  return (
    <div>
      <EditableProfileCard />
    </div>
  );
};
