import AboutIcon from '@/shared/assets/icons/about.svg';
import { RouterPaths } from '@/shared/config/router';
import { SidebarItemsList } from '../model';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export const sidebarItemsListConfig: SidebarItemsList = [
  {
    label: 'mainPage',
    Icon: MainIcon,
    to: RouterPaths.main,
  },
  {
    label: 'aboutPage',
    Icon: AboutIcon,
    to: RouterPaths.about,
  },
  {
    label: 'profilePage',
    Icon: ProfileIcon,
    to: RouterPaths.profile,
  },
];
