import { Story } from '@storybook/react';
import { LazyReducers, RootState, StoreProvider } from '@/app/providers';
import { loginReducer } from '@/features/AuthByUsername/model/slice';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleReducers } from '@/entities';

const defaultLazyReducers: LazyReducers = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducers,
};

export const StoreDecorator = (state: DeepPartial<RootState>) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state as RootState}
    lazyReducers={defaultLazyReducers}
  >
    <StoryComponent />
  </StoreProvider>
);
