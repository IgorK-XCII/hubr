import { ArticleView } from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const';

export const setArticlesViewToStorage = (view: ArticleView) => {
  localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, view);
};

export const getArticlesViewFromStorage = () => {
  const viewMode = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;

  if (!viewMode) return ArticleView.TILE;

  return viewMode;
};
