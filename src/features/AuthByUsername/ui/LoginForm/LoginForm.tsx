import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './LoginForm.module.scss';
import { Button, Input, Text } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/providers';
import { getLoginState, loginActions, loginByUsername } from '../../model';

interface LoginFormProps {
 className?: string;
 onClose: () => void;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    username, password, isLoading, error,
  } = useAppSelector(getLoginState);

  const handleChangeUsername = (value: string) => dispatch(
    loginActions.setUsername(value),
  );
  const handleChangePassword = (value: string) => dispatch(
    loginActions.setPassword(value),
  );
  const handleLogin = () => dispatch(
    loginByUsername({ username, password }),
  )
    .then((res) => {
      if (res.meta.requestStatus === 'fulfilled') onClose();
    });

  return (
    <div className={clsx([cls.LoginForm, className])}>
      <Text title={t('login form')} />
      <Input
        placeholder={t('enter-username')}
        autoFocus
        onChange={handleChangeUsername}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder={t('enter-password')}
        onChange={handleChangePassword}
        value={password}
        disabled={isLoading}
      />
      {error && (
      <Text text={t(error)} theme="error" />
      )}
      <Button
        className={cls.loginBtn}
        theme="outline"
        onClick={handleLogin}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});
