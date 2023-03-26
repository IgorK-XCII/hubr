import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBLock } from './ArticleImageBLock';

export default {
  title: 'shared/ArticleImageBLock',
  component: ArticleImageBLock,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageBLock>;

const Template: ComponentStory<typeof ArticleImageBLock> = (args) => <ArticleImageBLock {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
