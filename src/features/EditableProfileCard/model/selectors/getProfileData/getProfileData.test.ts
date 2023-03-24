import { RootState } from '@/app/providers';
import { Country, Currency } from '@/entities';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should work with filled state', () => {
    const data = {
      firstname: 'Harry',
      lastname: 'Potter',
      age: 18,
      currency: Currency.GBP,
      country: Country.UNITED_KINDOM,
      city: 'London',
      username: 'Avada Kedavra',
    };

    const state: DeepPartial<RootState> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as RootState)).toEqual(data);
  });

  test('should work with empty state', () => {
    expect(getProfileData({} as RootState)).toBe(null);
  });
});
