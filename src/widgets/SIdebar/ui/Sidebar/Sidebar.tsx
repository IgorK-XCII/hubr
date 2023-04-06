import {
  FC, memo, useState,
} from 'react';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { clsx } from '@/shared/lib';
import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui';
import { SidebaritemsList } from '../SidebarItemsList';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

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
        collapsed={collapsed}
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LocaleSwitcher short={collapsed} />
      </div>
    </div>
  );
});
