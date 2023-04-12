import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      value: 'tab-1',
      content: <div>Tab 1</div>,
    },
    {
      value: 'tab-2',
      content: <div>Tab 2</div>,
    },
  ],
  value: 'tab-2',
  onTabClick: action('onTabClick'),
};
