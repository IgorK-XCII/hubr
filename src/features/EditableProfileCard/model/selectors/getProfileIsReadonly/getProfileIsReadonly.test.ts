import { RootState } from '@/app/providers';
import { getProfileIsReadonly } from './getProfileIsReadonly';

describe('getProfileIsReadonly', () => {
  test('should work with filled state', () => {
    const isReadonly = true;

    const state: DeepPartial<RootState> = {
      profile: {
        isReadonly,
      },
    };

    expect(getProfileIsReadonly(state as RootState)).toBe(isReadonly);
  });

  test('should work with empty state', () => {
    expect(getProfileIsReadonly({} as RootState)).toBe(true);
  });
});
