import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import { Tabs, TabsItems } from '@/shared/ui';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChange: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
  const { className, value, onChange } = props;
  const { t } = useTranslation();

  const tabs = useMemo<TabsItems<ArticleType>>(() => (
    [
      {
        value: ArticleType.ALL,
        content: t('all'),
      },
      {
        value: ArticleType.IT,
        content: t('it'),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('economics'),
      },
      {
        value: ArticleType.SCIENCE,
        content: t('science'),
      },
    ]
  ), [t]);

  return (
    <Tabs
      tabs={tabs}
      onTabClick={onChange}
      value={value}
      className={clsx([className])}
    />
  );
};
