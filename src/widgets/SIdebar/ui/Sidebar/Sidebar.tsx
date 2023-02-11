import { FC, useState } from 'react';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { clsx } from '@/shared/lib';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={clsx([cls.sidebar, className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <button type="button" onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </div>
  );
};
