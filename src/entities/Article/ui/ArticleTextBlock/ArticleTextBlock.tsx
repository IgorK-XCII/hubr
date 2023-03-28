import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleTextBlock.module.scss';
import { ArticleTextBlock as ArticleTextBlockType } from '../../model';
import { Text } from '@/shared/ui';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlockType;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
  const { className, block } = props;
  const { title, paragraphs } = block;

  return (
    <div className={clsx([cls.articleTextBlock, className])}>
      {title && (
        <Text title={title} className={cls.title} />
      )}
      {paragraphs && (
        paragraphs.map((paragraph, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text text={paragraph} key={index} className={cls.paragraph} />
        ))
      )}
    </div>
  );
};
