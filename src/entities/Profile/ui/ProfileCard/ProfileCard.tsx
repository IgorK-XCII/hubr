import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Input, Loader, Text,
} from '@/shared/ui';
import { clsx } from '@/shared/lib';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model';
import {
  Country, CountrySelect, Currency, CurrencySelect,
} from '@/entities';

export interface ProfileCardProps {
  className?: string;
  data: Profile | null;
  error?: string;
  isLoading?: boolean;
  isReadonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
  className,
  data,
  error,
  isLoading,
  isReadonly,
  onChangeFirstName,
  onChangeLastName,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCountry,
  onChangeCurrency,
}) => {
  const { t } = useTranslation('profile');

  const {
    firstname, lastname, age, city, username, avatar, currency, country,
  } = data ?? {};

  if (isLoading) {
    return (
      <div className={clsx([cls.profilecard, className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={clsx([cls.profilecard, className, cls.error])}>
        <Text
          title={t('errorTitle')}
          text={t('errorDescription')}
          align="center"
          theme="error"
        />
      </div>
    );
  }

  return (
    <div className={clsx([cls.profilecard, className])}>
      <div className={cls.profileData}>
        {avatar && (
          <Avatar
            src={avatar}
            alt={t('avatar')}
            className={cls.avatar}
          />
        )}
        <Input
          placeholder={t('firstname')}
          value={firstname}
          readOnly={isReadonly}
          onChange={onChangeFirstName}
        />
        <Input
          placeholder={t('lastname')}
          value={lastname}
          readOnly={isReadonly}
          onChange={onChangeLastName}
        />
        <Input
          placeholder={t('age')}
          value={age}
          readOnly={isReadonly}
          onChange={onChangeAge}
          type="number"
        />
        <Input
          placeholder={t('city')}
          value={city}
          readOnly={isReadonly}
          onChange={onChangeCity}
        />
        <Input
          placeholder={t('username')}
          value={username}
          readOnly={isReadonly}
          onChange={onChangeUsername}
        />
        <Input
          placeholder={t('avatar')}
          value={avatar}
          readOnly={isReadonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={currency}
          readOnly={isReadonly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          value={country}
          readOnly={isReadonly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
