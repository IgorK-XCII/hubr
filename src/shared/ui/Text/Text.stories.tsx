import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  title: 'Title',
  text: 'Text',
  theme: 'primary',
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  title: 'Title',
  text: 'Text',
  theme: 'error',
};
