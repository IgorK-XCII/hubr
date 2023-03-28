import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleCodeBlock.module.scss';
import { ArticleCodeBlock as ArticleCodeBlockType } from '../../model';
import { Code } from '@/shared/ui';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = (props) => {
  const { className, block } = props;
  const { code } = block;

  return (
    <div className={clsx([cls.articleCodeBlock, className])}>
      <Code content={code} />
    </div>
  );
};
