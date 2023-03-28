import { fetchArticleById } from './fetchArticleById';
import { TestAsyncThunk } from '@/shared/config/tests';

describe('fetchArticleById', () => {
  test('success fetch', async () => {
    const data = {
      id: 1,
      title: 'JS news',
      subtitle: 'Что нового в JS в 22 году',
      views: 0,
      createdAt: '26.02.2022',
      type: ['IT', 'SCIENCE'],
      blocks: [],
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(
      Promise.resolve({ data }),
    );

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(
      Promise.reject(),
    );

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('fetchArticleById error');
  });
});
