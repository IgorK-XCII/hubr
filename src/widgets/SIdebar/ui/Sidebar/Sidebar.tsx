import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { clsx } from '@/shared/lib';
import cls from './Sidebar.module.scss';
import { Button } from '@/shared/ui';

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
      >
        {t('toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </div>
  );
};
