import { AnyAction, isAnyOf } from '@reduxjs/toolkit';
import { setArticlesViewToStorage } from '@/features/ArticleViewSelector';
import { articlePageActions } from '@/pages/ArticlesPage';

const isSettedView = isAnyOf(articlePageActions.setView);

export const articlesViewMiddleware = () => (
  next: (action: AnyAction) => void,
) => (action: AnyAction): void => {
  if (isSettedView(action)) setArticlesViewToStorage(action.payload);

  next(action);
};
