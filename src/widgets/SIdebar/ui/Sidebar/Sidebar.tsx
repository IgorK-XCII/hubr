import {
  FC, memo, useMemo, useState,
} from 'react';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { clsx, useAppSelector } from '@/shared/lib';
import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui';
import { SidebaritemsList } from '../SidebarItemsList';
import { sidebarItemsListConfig } from '../../config';
import { getUserAuthData } from '@/entities';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const isAuth = useAppSelector(getUserAuthData);

  const itemsList = useMemo(() => sidebarItemsListConfig
    .filter(
      (item) => !item.authOnly || isAuth,
    ), [isAuth]);

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
      <SidebaritemsList
        className={cls.links}
        items={itemsList}
        collapsed={collapsed}
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LocaleSwitcher short={collapsed} />
      </div>
    </div>
  );
});
