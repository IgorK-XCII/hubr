import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './PageError.module.scss';
import { Button } from '@/shared/ui';

interface PageErrorProps {
 className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => window.location.reload();

  return (
    <div className={clsx([cls.pageError, className])}>
      <p>{t('pageError')}</p>
      <Button onClick={reloadPage} className={cls.refreshBtn}>
        {t('reloadPage')}
      </Button>
    </div>
  );
};
