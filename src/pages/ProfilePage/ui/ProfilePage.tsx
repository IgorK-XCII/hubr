import { useEffect } from 'react';
import { useAppDispatch, useLazyReducersLoader } from '@/shared/lib';
import { profileReducer, fetchProfileData, ProfileCard } from '@/entities';
import { LazyReducers } from '@/app/providers';

const lazyReducers: LazyReducers = {
  profile: profileReducer,
};

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  useLazyReducersLoader(lazyReducers);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfileCard />
    </div>
  );
};
