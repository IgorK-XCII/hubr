import { AsyncThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers';

type ActionCreator<
  Return,
  Arg,
  RejectValue
> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>;

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => RootState;

  constructor(
    private actionCreator: ActionCreator<Return, Arg, RejectValue>,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
