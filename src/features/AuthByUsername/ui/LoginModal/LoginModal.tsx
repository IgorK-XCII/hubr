import { FC, Suspense } from 'react';
import { clsx } from '@/shared/lib';
import cls from './LoginModal.module.scss';
import { Loader, Modal } from '@/shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, ...props }) => (
  <Modal className={clsx([cls.LoginModal, className])} lazy {...props}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync {...props} />
    </Suspense>
  </Modal>
);
