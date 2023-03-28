import { RootState } from '@/app/providers';
import { getArticleIsLoading } from './getArticleIsLoading';

describe('getArticleIsLoading', () => {
  test('should return article isLoading flg', () => {
    const sliceState = {
      isLoading: true,
    };

    const state: DeepPartial<RootState> = {
      article: sliceState,
    };

    expect(getArticleIsLoading(state as RootState)).toEqual(sliceState.isLoading);
  });
});
