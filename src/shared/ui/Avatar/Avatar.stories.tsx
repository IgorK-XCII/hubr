import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: 'https://img2.joyreactor.cc/pics/post/%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B0%D1%83%D0%BD%D0%BE%D0%B2-%D0%B1%D0%B0%D0%B1%D1%83%D1%88%D0%BA%D0%B8-7820097.jpeg',
    alt: 'alt',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const BigSize = Template.bind({});
BigSize.args = {
  size: 300,
};
