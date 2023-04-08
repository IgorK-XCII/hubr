import { AnyAction, isAnyOf } from '@reduxjs/toolkit';
import { articlePageActions } from '@/pages';
import { setArticlesViewToStorage } from '@/features/ArticleViewSelector';

const isSettedView = isAnyOf(articlePageActions.setView);

export const articlesViewMiddleware = () => (
  next: (action: AnyAction) => void,
) => (action: AnyAction): void => {
  if (isSettedView(action)) setArticlesViewToStorage(action.payload);

  next(action);
};
