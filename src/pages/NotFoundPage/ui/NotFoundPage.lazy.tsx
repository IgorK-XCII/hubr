import { lazyComponentLoader } from '@/shared/lib';

export const NotFoundPageLazy = lazyComponentLoader(() => import('./NotFoundPage'), 'NotFoundPage');
