import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  Button, Input, Text,
} from '@/shared/ui';
import { clsx } from '@/shared/lib';
import { getProfileData, getProfileError, getProfileIsLoading } from '../../model';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const profile = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={clsx([cls.profilecard, className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button theme="outline" className={cls.editBtn}>
          {t('edit')}
        </Button>
      </div>
      <div className={cls.profileData}>
        <Input placeholder={t('firstname')} value={profile?.firstname} />
        <Input placeholder={t('lastname')} value={profile?.lastname} />
      </div>
    </div>
  );
};
