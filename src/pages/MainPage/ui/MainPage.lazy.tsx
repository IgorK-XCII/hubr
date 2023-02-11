import { lazyComponentLoader } from '@/shared/lib';

export const MainPageLazy = lazyComponentLoader(() => import('./MainPage'), 'MainPage');
