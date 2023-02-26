import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (StoryComponent: Story) => (
  <div className="app">
    <StoryComponent />
  </div>
);
