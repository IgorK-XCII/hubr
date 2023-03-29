import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from '@/shared/config/tests';
import { ValidateProfileError } from '../../types';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const data = {
  firstname: 'Harry',
  lastname: 'Potter',
  age: 18,
  currency: Currency.GBP,
  country: Country.UNITED_KINDOM,
  city: 'London',
  username: 'Avada Kedavra',
};

describe('updateProfileData success', () => {
  test('success login', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(
      Promise.resolve({ data }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(data);
  });

  test('updateProfileData error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(
      Promise.reject(),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('update profile error');
  });

  test('updateProfileData validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data,
          firstname: '',
        },
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual([ValidateProfileError.USER_DATA_ERROR]);
  });
});
