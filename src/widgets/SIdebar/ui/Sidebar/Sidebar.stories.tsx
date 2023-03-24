import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';

import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
  user: {
    authData: {},
  },
})];

export const NoAuth = Template.bind({});
NoAuth.decorators = [StoreDecorator({
  user: {
  },
})];
