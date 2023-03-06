import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './LoginForm.module.scss';
import { Button, Input } from '@/shared/ui';

interface LoginFormProps {
 className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx([cls.LoginForm, className])}>
      <Input placeholder={t('enter-username')} autoFocus />
      <Input placeholder={t('enter-password')} />
      <Button className={cls.loginBtn}>
        {t('enter')}
      </Button>
    </div>
  );
};
