import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { AboutPage } from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
