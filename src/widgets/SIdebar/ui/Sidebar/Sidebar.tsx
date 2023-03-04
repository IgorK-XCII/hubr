import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { clsx } from '@/shared/lib';
import cls from './Sidebar.module.scss';
import { AppLink, Button } from '@/shared/ui';
import { RouterPaths } from '@/shared/config/router';
import AboutIcon from '@/shared/assets/icons/about.svg';
import MainIcon from '@/shared/assets/icons/main.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={clsx([cls.sidebar, className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme="background-inverted"
        square
        size="l"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.links}>
        <AppLink className={cls.link} theme="secondary" to={RouterPaths.main}>
          <MainIcon />
          <span>
            {t('mainPage')}
          </span>
        </AppLink>
        <AppLink className={cls.link} theme="secondary" to={RouterPaths.about}>
          <AboutIcon />
          <span>
            {t('aboutPage')}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LocaleSwitcher short={collapsed} />
      </div>
    </div>
  );
};
