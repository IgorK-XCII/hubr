import { FC, memo } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleBlocks.module.scss';
import { ArticleBlocks, ArticleBLockType } from '../../model';
import { ArticleCodeBlock } from '../ArticleCodeBlock';
import { ArticleImageBLock } from '../ArticleImageBLock';
import { ArticleTextBlock } from '../ArticleTextBlock';

interface ArticleBlocksProps {
  className?: string;
  blocks: ArticleBlocks | undefined;
}

export const ArticleBlocksContainer: FC<ArticleBlocksProps> = memo((props) => {
  const { className, blocks } = props;

  if (!blocks) return null;

  return (
    <div className={clsx([cls.articleBlocks, className])}>
      {blocks.map((block) => {
        const { id, type } = block;

        switch (type) {
          case ArticleBLockType.CODE:
            return <ArticleCodeBlock block={block} key={id} />;
          case ArticleBLockType.IMAGE:
            return <ArticleImageBLock block={block} key={id} />;
          case ArticleBLockType.TEXT:
            return <ArticleTextBlock block={block} key={id} />;
          default:
            return null;
        }
      })}
    </div>
  );
});
