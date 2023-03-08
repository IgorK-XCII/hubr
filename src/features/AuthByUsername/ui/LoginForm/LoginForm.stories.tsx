import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { LoginForm } from './LoginForm';

export default {
  title: 'feature/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
  },
  decorators: [],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

Primary.decorators = [StoreDecorator({
  login: { username: 'user', password: 'password' },
})];

export const WithError = Template.bind({});
WithError.args = {
};

WithError.decorators = [StoreDecorator({
  login: { username: 'user', password: 'password', error: 'AUTH ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {
};

Loading.decorators = [StoreDecorator({
  login: { username: 'user', password: 'password', isLoading: true },
})];
