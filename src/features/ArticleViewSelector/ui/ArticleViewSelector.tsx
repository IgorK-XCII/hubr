import { FC, memo } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { Button, Icon } from '@/shared/ui';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.TILE,
    icon: TiledIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props) => {
  const { className, view, onViewClick } = props;

  const handleClick = (viewMode: ArticleView) => () => onViewClick(viewMode);

  return (
    <div className={clsx([cls.articleViewSelector, className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme="clear"
          className={clsx([], {
            [cls.selected]: view === viewType.view,
          })}
          onClick={handleClick(viewType.view)}
          key={viewType.view}
        >
          <Icon svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
});
