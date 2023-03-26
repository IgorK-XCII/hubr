import AboutIcon from '@/shared/assets/icons/about.svg';
import { RouterPaths } from '@/shared/config/router';
import { SidebarItemsList } from '../model';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';

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
    authOnly: true,
  },
  {
    label: 'articles',
    Icon: ArticlesIcon,
    to: RouterPaths.articles,
    authOnly: true,
  },
];
