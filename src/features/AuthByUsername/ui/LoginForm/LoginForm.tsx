import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  clsx, useAppDispatch, useAppSelector, useLazyReducersLoader,
} from '@/shared/lib';
import cls from './LoginForm.module.scss';
import { Button, Input, Text } from '@/shared/ui';
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername, loginByUsername,
} from '../../model';
import { loginActions, loginReducer } from '../../model/slice';
import { LazyReducers } from '@/app/providers';

interface LoginFormProps {
 className?: string;
 onClose: () => void;
}

const initialReducers: LazyReducers = {
  login: loginReducer,
};

export const LoginForm: FC<LoginFormProps> = memo(({ className, onClose }) => {
  const { t } = useTranslation();
  useLazyReducersLoader(initialReducers);
  const dispatch = useAppDispatch();

  const username = useAppSelector(getLoginUsername);
  const password = useAppSelector(getLoginPassword);
  const isLoading = useAppSelector(getLoginIsLoading);
  const error = useAppSelector(getLoginError);

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
