import { ComponentStory, ComponentMeta } from '@storybook/react';
import '@/app/styles/index.scss';

import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
