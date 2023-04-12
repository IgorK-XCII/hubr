import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectItems } from '@/shared/ui';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props) => {
  const {
    className,
    order,
    sort,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation();

  const orderItems = useMemo<SelectItems<SortOrder>>(() => [
    {
      value: SortOrder.ASC,
      content: t('asc'),
    },
    {
      value: SortOrder.DESC,
      content: t('desc'),
    },
  ], [t]);

  const sortFieldItems = useMemo<SelectItems<ArticleSortField>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('byCreated'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('byTitle'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('byViews'),
    },
  ], [t]);

  return (
    <div className={clsx([cls.articleSortSelector, className])}>
      <Select
        label={t('sortBy')}
        items={sortFieldItems}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t('order')}
        items={orderItems}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
