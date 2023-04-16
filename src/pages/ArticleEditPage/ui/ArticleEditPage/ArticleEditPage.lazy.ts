import { lazyComponentLoader } from '@/shared/lib';

export const ArticleEditPageLazy = lazyComponentLoader(
  () => import('./ArticleEditPage'),
  'ArticleEditPage',
);
