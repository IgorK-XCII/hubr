import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface LocaleSwitcherProps {
  className?: string;
}

export const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();

  const handleToggle = async () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      theme="clear"
      onClick={handleToggle}
      className={clsx([className])}
    >
      {t('language')}
    </Button>
  );
};
