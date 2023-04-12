import { ReactNode } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Tabs.module.scss';
import { typedMemo } from '@/shared/lib';
import { Card } from '../Card';

interface TabItem<T> {
  value: T;
  content: ReactNode;
}

export type TabsItems<T> = TabItem<T>[];

interface TabsProps<T> {
  className?: string;
  tabs: TabsItems<T>;
  value: T;
  onTabClick: (tabValue: T) => void
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const handleCLick = (tabValue: T) => () => onTabClick(tabValue);

  return (
    <div className={clsx([cls.tabs, className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={value === tab.value ? 'normal' : 'outlined'}
          onClick={handleCLick(tab.value)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
