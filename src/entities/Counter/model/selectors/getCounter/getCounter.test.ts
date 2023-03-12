import { RootState } from '@/app/providers';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter data', () => {
    const state: DeepPartial<RootState> = {
      counter: { value: 10 },
    };

    expect(getCounter(state as RootState)).toEqual({ value: 10 });
  });
});
