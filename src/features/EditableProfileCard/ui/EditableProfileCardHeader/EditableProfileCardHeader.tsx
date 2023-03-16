import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx, useAppDispatch, useAppSelector } from '@/shared/lib';
import cls from './EditableProfileCardHeader.module.scss';
import { Button, Text } from '@/shared/ui';
import { getProfileIsReadonly, profileActions, updateProfileData } from '../../model';

interface EditableProfileCardHeaderProps {
 className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({ className }) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const isReadonly = useAppSelector(getProfileIsReadonly);

  const handleSetEditMode = () => dispatch(
    profileActions.setReadOnly(false),
  );

  const handleResetEditMode = () => dispatch(
    profileActions.cancelEditProfileForm(),
  );

  const saveFormData = () => dispatch(
    updateProfileData(),
  );

  return (
    <div className={clsx([cls.editableProfileCardHeader, className])}>
      <Text title={t('profile')} />
      {isReadonly ? (
        <Button
          theme="outline"
          className={cls.editBtn}
          onClick={handleSetEditMode}
        >
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button
            theme="outline-red"
            className={cls.editBtn}
            onClick={handleResetEditMode}
          >
            {t('cancel')}
          </Button>
          <Button
            theme="outline"
            className={cls.saveBtn}
            onClick={saveFormData}
          >
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
