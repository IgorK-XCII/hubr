import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    firstname: 'Harry',
    lastname: 'Potter',
    age: 18,
    currency: Currency.GBP,
    country: Country.UNITED_KINDOM,
    city: 'London',
    username: 'Avada Kedavra',
    avatar: 'https://img2.joyreactor.cc/pics/post/full/%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B5%D1%82%D0%B8-Harry-James-Potter-%D0%9F%D0%BE%D1%82%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BD%D0%B0-Hermione-Granger-7815246.jpeg',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
};
