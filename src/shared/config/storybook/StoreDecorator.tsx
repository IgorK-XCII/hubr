import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { RootState, StoreProvider } from '@/app/providers';

export const StoreDecorator = (state: DeepPartial<RootState>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state as RootState}>
    <StoryComponent />
  </StoreProvider>
);
