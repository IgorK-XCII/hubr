import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook';
import { ProfilePage } from './ProfilePage';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      firstname: 'Harry',
      lastname: 'Potter',
      age: 18,
      currency: Currency.GBP,
      country: Country.UNITED_KINDOM,
      city: 'London',
      username: 'Avada Kedavra',
      avatar: 'https://img2.joyreactor.cc/pics/post/full/%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81%D0%B5%D1%82%D0%B8-Harry-James-Potter-%D0%9F%D0%BE%D1%82%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BD%D0%B0-Hermione-Granger-7815246.jpeg',
    },
  },
})];
