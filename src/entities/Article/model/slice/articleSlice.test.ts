import { articleReducer, initialState } from './articleSlice';
import { ArticleSchema } from '../types';
import { fetchArticleById } from '../services';

const data = {
  id: 1,
  title: 'JS news',
  subtitle: 'Что нового в JS в 22 году',
  views: 0,
  createdAt: '26.02.2022',
  type: ['IT', 'SCIENCE'],
  img: '',
  blocks: [],
  user: {
    id: 1,
    username: 'user',
  },
};

describe('articleSlice', () => {
  test('fetchArticleById.pending', () => {
    const state: Partial<ArticleSchema> = { error: 'error', isLoading: false };

    expect(
      articleReducer(state as ArticleSchema, fetchArticleById.pending),
    ).toEqual<Partial<ArticleSchema>>({
      error: null,
      isLoading: true,
    });
  });

  test('fetchArticleById.fullfiled', () => {
    const state: Partial<ArticleSchema> = {
      isLoading: true,
    };

    expect(
      articleReducer(state as ArticleSchema, fetchArticleById.fulfilled(
        data,
        '',
        '1',
      )),
    ).toEqual<Partial<ArticleSchema>>({
      data,
      isLoading: false,
    });
  });

  test('fetchArticleById.rejected', () => {
    const state: Partial<ArticleSchema> = {
      isLoading: true,
    };

    const error = 'error';

    expect(
      articleReducer(state as ArticleSchema, fetchArticleById.rejected(null, '', '2', error)),
    ).toEqual<Partial<ArticleSchema>>({
      isLoading: false,
      error,
    });
  });

  test('should work with empty state', () => {
    expect(
      articleReducer(undefined, fetchArticleById.pending),
    ).toEqual<Partial<ArticleSchema>>({
      ...initialState,
      isLoading: true,
    });
  });
});
