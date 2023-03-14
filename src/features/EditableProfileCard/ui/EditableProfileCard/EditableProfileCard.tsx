import { FC, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { ProfileCard, ProfileCardProps } from '@/entities';
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

  const handleChangeFirstName: ProfileCardProps['onChangeFirstName'] = useCallback((value) => dispatch(
    profileActions.updateProfileForm({ firstname: value }),
  ), [dispatch]);

  const handleChangeLastName: ProfileCardProps['onChangeLastName'] = useCallback((lastname) => dispatch(
    profileActions.updateProfileForm({ lastname }),
  ), [dispatch]);

  const handleChangeAge: ProfileCardProps['onChangeAge'] = useCallback((age) => {
    dispatch(
      profileActions.updateProfileForm({ age }),
    );
  }, [dispatch]);

  const handleChangeCity: ProfileCardProps['onChangeCity'] = useCallback((city) => dispatch(
    profileActions.updateProfileForm({ city }),
  ), [dispatch]);

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
      />
    </div>
  );
};
