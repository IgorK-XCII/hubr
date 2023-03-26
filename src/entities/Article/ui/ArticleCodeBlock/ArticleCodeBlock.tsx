import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib/clsx';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.articleCodeBlock, className])} />
  );
};
