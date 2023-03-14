import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Input, Loader, Text,
} from '@/shared/ui';
import { clsx } from '@/shared/lib';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model';

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
}) => {
  const { t } = useTranslation('profile');

  const {
    firstname, lastname, age, city,
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
      </div>
    </div>
  );
};
