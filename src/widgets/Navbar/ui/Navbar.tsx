import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui';
import { RouterPaths } from '@/shared/config';
import { APP_ROUTES } from '@/shared/config/router/appRoutes';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.navbar, className])}>
      <div className={clsx([cls.links])}>
        <AppLink theme="primary" to={RouterPaths[APP_ROUTES.MAIN]}>
          {t('mainPage')}
        </AppLink>
        <AppLink theme="primary" to={RouterPaths[APP_ROUTES.ABOUT]}>
          {t('aboutPage')}
        </AppLink>
      </div>
    </div>
  );
};
