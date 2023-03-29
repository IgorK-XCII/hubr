import { RootState } from '@/app/providers';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should work with filled state', () => {
    const form = {
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
        form,
      },
    };

    expect(getProfileForm(state as RootState)).toEqual(form);
  });

  test('should work with empty state', () => {
    expect(getProfileForm({} as RootState)).toBe(null);
  });
});
