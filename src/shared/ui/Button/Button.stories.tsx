import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Text',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const ClearTheme = Template.bind({});
ClearTheme.args = {
  theme: 'clear',
};

export const OutlinedTheme = Template.bind({});
OutlinedTheme.args = {
  theme: 'outline',
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  theme: 'background',
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
  theme: 'background-inverted',
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  theme: 'background-inverted',
};
