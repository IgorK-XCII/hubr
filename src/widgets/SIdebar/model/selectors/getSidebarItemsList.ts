import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from '@/shared/assets/icons/about.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import { getUserAuthData } from '@/entities/User';
import { RouterPaths } from '@/shared/config/router';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';

export const getSidebarItemsList = createSelector(getUserAuthData, (authData) => {
  const list = [
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
  ];

  if (authData) {
    list.push(
      {
        label: 'profilePage',
        Icon: ProfileIcon,
        to: `${RouterPaths.profile}${authData.id}`,
      },
      {
        label: 'articles',
        Icon: ArticlesIcon,
        to: RouterPaths.articles,
      },
    );
  }

  return list;
});
