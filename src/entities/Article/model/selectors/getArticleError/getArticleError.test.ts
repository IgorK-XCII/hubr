import { RootState } from '@/app/providers';
import { getArticleError } from './getArticleError';

describe('getArticleError', () => {
  test('should return article error', () => {
    const sliceState = {
      error: 'error',
    };

    const state: DeepPartial<RootState> = {
      article: sliceState,
    };

    expect(getArticleError(state as RootState)).toEqual(sliceState.error);
  });
});
