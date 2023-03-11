import { FC, memo } from 'react';
import { clsx } from '@/shared/lib';
import { SidebarItemsList } from '../../model';
import { SidebarItem } from '../SidebarItem';
import cls from './SidebarItemsList.module.scss';

interface SidebaritemsListProps {
  className: string;
  items: SidebarItemsList;
  collapsed: boolean
}

export const SidebaritemsList: FC<SidebaritemsListProps> = memo((({
  items,
  collapsed,
  className,
}) => (
  <div className={clsx([cls.sidebarItemsList, className])}>
    {items.map((item) => (
      <SidebarItem item={item} collapsed={collapsed} key={item.to} />
    ))}
  </div>
)));
