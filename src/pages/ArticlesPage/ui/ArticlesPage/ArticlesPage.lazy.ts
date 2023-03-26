import { lazyComponentLoader } from '@/shared/lib';

export const ArticlesPageLazy = lazyComponentLoader(() => import('./ArticlesPage'), 'ArticlesPage');
