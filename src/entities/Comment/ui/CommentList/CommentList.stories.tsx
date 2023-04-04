import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  comments: [
    {
      id: 1,
      user: {
        username: 'Test user 1',
        id: 0,
      },
      text: 'Test text 1',
    },
    {
      id: 2,
      user: {
        username: 'Test user 2',
        id: 1,
      },
      text: 'Test text 2',
    },
  ],
};

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: true,
};
