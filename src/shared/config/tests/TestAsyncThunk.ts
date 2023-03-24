import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { RootState } from '@/app/providers';

type ActionCreator<
  Return,
  Arg,
  RejectValue
> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => RootState;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    private actionCreator: ActionCreator<Return, Arg, RejectValue>,
    state?: DeepPartial<RootState>,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as RootState);
    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.api });

    return result;
  }
}
