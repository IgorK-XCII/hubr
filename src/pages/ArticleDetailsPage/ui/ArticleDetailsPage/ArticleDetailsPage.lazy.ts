import { lazyComponentLoader } from '@/shared/lib';

export const ArticleDetailsPageLazy = lazyComponentLoader(() => import('./ArticleDetailsPage'), 'ArticleDetailsPage');
