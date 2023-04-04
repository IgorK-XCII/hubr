import { lazyComponentLoader } from '@/shared/lib';

export const AddCommentFormLazy = lazyComponentLoader(
  () => import('./AddCommentForm'),
  'AddCommentForm',
);
