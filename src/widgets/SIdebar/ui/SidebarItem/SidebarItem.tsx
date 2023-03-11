import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui';
import { SidebarItemType } from '../../model';
import { clsx } from '@/shared/lib';

interface SidebarItemProps {
 item: SidebarItemType
 collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();
  const { Icon, label, to } = item;

  const mods = {
    [cls.collapsed]: collapsed,
  };

  return (
    <AppLink className={clsx([cls.sidebarItem], mods)} theme="secondary" to={to}>
      <Icon />
      <span>
        {t(label)}
      </span>
    </AppLink>
  );
});
