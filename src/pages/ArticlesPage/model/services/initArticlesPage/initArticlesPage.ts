import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getArticlesPageIsInit,
} from '../../selectors/articlesPageSelectors';
import { ThunkOptions } from '@/app/providers';
import { articlePageActions } from '../../slice';
import { ArticleView } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<
  void,
  ArticleView,
  ThunkOptions<string>
>(
  'articlesPage/initArticlesPage',
  (view, {
    getState, dispatch,
  }) => {
    const state = getState();
    const isInited = getArticlesPageIsInit(state);

    if (isInited) return;

    dispatch(articlePageActions.initState(view));
  },
);
