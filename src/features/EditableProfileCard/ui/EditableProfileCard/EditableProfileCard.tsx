import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Country, Currency, ProfileCard } from '@/entities';
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileIsReadonly,
  getProfileValidationErrors,
  profileActions,
  ValidateProfileError,
} from '../../model';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader';
import cls from './EditableProfileCard.module.scss';
import { Text } from '@/shared/ui';

interface EditableProfileCardProps {
 className?: string;
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const formData = useAppSelector(getProfileForm);
  const error = useAppSelector(getProfileError);
  const isLoading = useAppSelector(getProfileIsLoading);
  const isReadonly = useAppSelector(getProfileIsReadonly);
  const validationErrors = useAppSelector(getProfileValidationErrors);

  const validationErrorsTranslates = {
    [ValidateProfileError.AGE_ERROR]: 'ageError',
    [ValidateProfileError.NO_DATA_ERROR]: 'noDataError',
    [ValidateProfileError.USER_DATA_ERROR]: 'userDataError',
  };

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
      {validationErrors?.map((err) => (
        <Text
          key={err}
          text={t(validationErrorsTranslates[err])}
          theme="error"
        />
      ))}
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
