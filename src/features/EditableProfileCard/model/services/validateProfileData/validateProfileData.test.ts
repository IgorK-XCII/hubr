import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const profile = {
  firstname: 'Harry',
  lastname: 'Potter',
  age: 18,
  currency: Currency.GBP,
  country: Country.UNITED_KINDOM,
  city: 'London',
  username: 'Avada Kedavra',
};

describe('validateProfileData success', () => {
  test('success login', async () => {
    expect(validateProfileData(profile)).toEqual([]);
  });

  test('validateProfileData name error', async () => {
    expect(validateProfileData({ ...profile, firstname: '', lastname: '' }))
      .toEqual([ValidateProfileError.USER_DATA_ERROR]);
  });

  test('validateProfileData age error', async () => {
    expect(validateProfileData({ ...profile, age: 0 }))
      .toEqual([ValidateProfileError.AGE_ERROR]);
  });
});
