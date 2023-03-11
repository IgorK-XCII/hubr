import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { RootState, StoreProvider } from '@/app/providers';
import { LazyReducers } from '@/shared/lib';
import { loginReducer } from '@/features/AuthByUsername/model/slice';

const defaultLazyReducers: LazyReducers = {
  login: loginReducer,
};

export const StoreDecorator = (state: DeepPartial<RootState>) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state as RootState}
    lazyReducers={defaultLazyReducers}
  >
    <StoryComponent />
  </StoreProvider>
);
