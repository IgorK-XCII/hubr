import { addDecorator } from '@storybook/react';
import {
  RouterDecorator, StyleDecorator, SuspenceDecorator,
} from '@/shared/config/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    target: '.app',
    default: 'light',
    list: [
      { name: 'light', class: 'light' },
      { name: 'dark', class: 'dark' },
    ],
  },
};

addDecorator(SuspenceDecorator);
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
