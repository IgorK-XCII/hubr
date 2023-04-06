import { FC, memo } from 'react';
import { clsx, useAppSelector } from '@/shared/lib';
import { SidebarItem } from '../SidebarItem';
import cls from './SidebarItemsList.module.scss';
import { getSidebarItemsList } from '../../model/selectors';

interface SidebaritemsListProps {
  className: string;
  collapsed: boolean
}

export const SidebaritemsList: FC<SidebaritemsListProps> = memo((({
  collapsed,
  className,
}) => {
  const items = useAppSelector(getSidebarItemsList);

  return (
    <div className={clsx([cls.sidebarItemsList, className])}>
      {items.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.to} />
      ))}
    </div>
  );
}));
