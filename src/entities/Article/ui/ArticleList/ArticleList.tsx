import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleList.module.scss';
import { Articles, ArticleView } from '../../model';
import { ArticleListItem, ArticleListItemSkeleton } from '../ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Articles;
  isLoading?: boolean;
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 3)
  .fill('')
  .map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view as ArticleView} />
  ));

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className, articles, isLoading, view = ArticleView.TILE,
  } = props;

  const { t } = useTranslation();

  const articleList = useMemo(
    () => articles.map((article) => (
      <ArticleListItem article={article} view={view as ArticleView} key={article.id} />
    )),
    [articles, view],
  );

  return (
    <div className={clsx([cls.articleList, className, cls[view]])}>
      {articles.length ? (
        articleList
      ) : (
        null
      )}
      {isLoading && (
        getSkeletons(view)
      )}
    </div>
  );
};
