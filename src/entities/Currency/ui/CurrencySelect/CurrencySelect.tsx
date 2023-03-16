import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx, getObjectEntries } from '@/shared/lib';
import { Select } from '@/shared/ui';
import { Currency } from '../../model';

const currencyItems = getObjectEntries(Currency).map(
  ([, val]) => ({ value: val, content: val }),
);

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = ({ className, ...props }) => {
  const { t } = useTranslation();

  return (
    <Select
      className={clsx([className])}
      items={currencyItems}
      label={t('chooseCurrency')}
      {...props}
    />
  );
};
