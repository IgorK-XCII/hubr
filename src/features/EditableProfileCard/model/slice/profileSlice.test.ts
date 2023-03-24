import { initialState, profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types';
import { Country, Currency } from '@/entities';
import { fetchProfileData } from '../services';

const data = {
  firstname: 'Harry',
  lastname: 'Potter',
  age: 18,
  currency: Currency.GBP,
  country: Country.UNITED_KINDOM,
  city: 'London',
  username: 'Avada Kedavra',
};

describe('profileSlice', () => {
  test('setReadOnly', () => {
    const state: Partial<ProfileSchema> = { isReadonly: true };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(false)),
    ).toEqual<Partial<ProfileSchema>>({
      isReadonly: false,
    });
  });

  test('cancelEditProfileForm', () => {
    const state: Partial<ProfileSchema> = {
      data,
      form: {
        firstname: '',
        lastname: '',
      },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEditProfileForm()),
    ).toEqual<Partial<ProfileSchema>>({
      data,
      form: data,
      isReadonly: true,
      validateProfileError: null,
    });
  });

  test('updateProfileForm', () => {
    const state: Partial<ProfileSchema> = {
      form: {
        firstname: '',
        lastname: '',
      },
    };

    const form = {
      firstname: 'Harry',
      lastname: 'Potter',
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfileForm(form)),
    ).toEqual<Partial<ProfileSchema>>({
      form,
    });
  });

  test('should work with empty state', () => {
    expect(
      profileReducer(undefined, profileActions.setReadOnly(false)),
    ).toEqual<Partial<ProfileSchema>>({
      ...initialState,
      isReadonly: false,
    });
  });

  test('fetchProfileData.pending', () => {
    const state: Partial<ProfileSchema> = {
      isLoading: false,
      error: ValidateProfileError.NO_DATA_ERROR,
    };

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending),
    ).toEqual<Partial<ProfileSchema>>({
      isLoading: true,
      error: null,
    });
  });

  test('fetchProfileData.fulfilled', () => {
    const state: Partial<ProfileSchema> = {
      data: null,
      isLoading: true,
    };

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '')),
    ).toEqual<Partial<ProfileSchema>>({
      data,
      form: data,
      isLoading: false,
    });
  });
});
