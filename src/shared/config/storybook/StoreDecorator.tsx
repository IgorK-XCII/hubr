import { Story } from '@storybook/react';
import { LazyReducers, RootState, StoreProvider } from '@/app/providers';
import { loginReducer } from '@/features/AuthByUsername/model/slice';
import { profileReducer } from '@/features/EditableProfileCard';
import { articleReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice';

const defaultLazyReducers: LazyReducers = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (state: DeepPartial<RootState>) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state as RootState}
    lazyReducers={defaultLazyReducers}
  >
    <StoryComponent />
  </StoreProvider>
);
