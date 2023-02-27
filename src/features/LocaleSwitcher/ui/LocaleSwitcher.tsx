import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import { Button } from '@/shared/ui';

interface LocaleSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ className, short }) => {
  const { i18n, t } = useTranslation();

  const handleToggle = () => i18n.changeLanguage(
    i18n.language === 'ru'
      ? 'en'
      : 'ru',
  );

  const title = short ? 'short-lang' : 'full-lang';

  return (
    <Button
      theme="clear"
      onClick={handleToggle}
      className={clsx([className])}
    >
      {t(title)}
    </Button>
  );
};
