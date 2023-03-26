import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.articleTextBlock, className])} />
  );
};
