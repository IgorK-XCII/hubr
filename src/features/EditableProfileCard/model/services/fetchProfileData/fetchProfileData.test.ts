import { fetchProfileData } from './fetchProfileData';
import { Country, Currency } from '@/entities';
import { TestAsyncThunk } from '@/shared/config/tests';

const data = {
  firstname: 'Harry',
  lastname: 'Potter',
  age: 18,
  currency: Currency.GBP,
  country: Country.UNITED_KINDOM,
  city: 'London',
  username: 'Avada Kedavra',
};

describe('fetchProfileData success', () => {
  test('success login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(
      Promise.resolve({ data }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(data);
  });

  test('fetchProfileData error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(
      Promise.reject(),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('fetch profile error');
  });
});
