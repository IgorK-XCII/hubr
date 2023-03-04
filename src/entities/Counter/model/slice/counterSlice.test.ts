import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types';

describe('counterSlice', () => {
  test('must increment counter value', () => {
    const state: CounterSchema = { value: 10 };

    expect(
      counterReducer(state as CounterSchema, counterActions.increment()),
    ).toEqual({
      value: 11,
    });
  });

  test('must decrement counter value', () => {
    const state: CounterSchema = { value: 10 };

    expect(
      counterReducer(state as CounterSchema, counterActions.decrement()),
    ).toEqual({
      value: 9,
    });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({
      value: 1,
    });
  });
});
