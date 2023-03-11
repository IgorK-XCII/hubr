import { lazyComponentLoader } from '@/shared/lib';

export const ProfilePageLazy = lazyComponentLoader(
  () => import('./ProfilePage'),
  'ProfilePage',
);
