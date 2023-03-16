import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx, getObjectEntries } from '@/shared/lib';
import { Select } from '@/shared/ui';
import { Country } from '../../model';

const currencyItems = getObjectEntries(Country).map(
  ([, val]) => ({ value: val, content: val }),
);

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = ({ className, ...props }) => {
  const { t } = useTranslation();

  return (
    <Select
      className={clsx([className])}
      items={currencyItems}
      label={t('chooseCountry')}
      {...props}
    />
  );
};
