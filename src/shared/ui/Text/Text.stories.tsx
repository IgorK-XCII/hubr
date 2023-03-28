import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Title',
    text: 'Text',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  theme: 'primary',
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  theme: 'error',
};

export const WithLSize = Template.bind({});
PrimaryTheme.args = {
  theme: 'primary',
  size: 'l',
};
