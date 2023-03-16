import { FC, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Country, Currency, ProfileCard } from '@/entities';
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileIsReadonly,
  profileActions,
} from '../../model';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader';
import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
 className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const formData = useAppSelector(getProfileForm);
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);
  const isReadonly = useAppSelector(getProfileIsReadonly);

  const handleChangeFirstName = useCallback((value: string) => dispatch(
    profileActions.updateProfileForm({ firstname: value }),
  ), [dispatch]);

  const handleChangeLastName = useCallback((lastname: string) => dispatch(
    profileActions.updateProfileForm({ lastname }),
  ), [dispatch]);

  const handleChangeAge = useCallback(
    (age: string) => dispatch(
      profileActions.updateProfileForm({ age: Number(age) }),
    ),
    [dispatch],
  );

  const handleChangeCity = useCallback((city: string) => dispatch(
    profileActions.updateProfileForm({ city }),
  ), [dispatch]);

  const handleChangeUsername = useCallback(
    (username: string) => dispatch(profileActions.updateProfileForm({
      username,
    })),
    [dispatch],
  );

  const handleChangeAvatar = useCallback(
    (avatar: string) => dispatch(profileActions.updateProfileForm({
      avatar,
    })),
    [dispatch],
  );

  const handleChangeCurrency = useCallback(
    (currency: Currency) => dispatch(profileActions.updateProfileForm({
      currency,
    })),
    [dispatch],
  );

  const handleChangeCountry = useCallback(
    (country: Country) => dispatch(profileActions.updateProfileForm({
      country,
    })),
    [dispatch],
  );

  return (
    <div className={className}>
      <EditableProfileCardHeader />
      <ProfileCard
        data={formData}
        error={error}
        isLoading={isLoading}
        isReadonly={isReadonly}
        className={cls.card}
        onChangeFirstName={handleChangeFirstName}
        onChangeLastName={handleChangeLastName}
        onChangeAge={handleChangeAge}
        onChangeCity={handleChangeCity}
        onChangeUsername={handleChangeUsername}
        onChangeAvatar={handleChangeAvatar}
        onChangeCurrency={handleChangeCurrency}
        onChangeCountry={handleChangeCountry}
      />
    </div>
  );
};
