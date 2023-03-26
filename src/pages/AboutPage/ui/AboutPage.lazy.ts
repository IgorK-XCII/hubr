import { lazyComponentLoader } from '@/shared/lib';

export const AboutPageLazy = lazyComponentLoader(() => import('./AboutPage'), 'AboutPage');
