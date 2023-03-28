import { RootState } from '@/app/providers';
import { getArticleData } from './getArticleData';

describe('getArticleData', () => {
  test('should return article data', () => {
    const sliceState = {
      data: {
      },
      isLoading: false,
      error: null,
    };

    const state: DeepPartial<RootState> = {
      article: sliceState,
    };

    expect(getArticleData(state as RootState)).toEqual(sliceState.data);
  });
});
