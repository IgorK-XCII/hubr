import { FC } from 'react';
import { clsx } from '@/shared/lib';
import { LoginForm } from '../LoginForm';
import cls from './LoginModal.module.scss';
import { Modal } from '@/shared/ui';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, ...props }) => (
  <Modal className={clsx([cls.LoginModal, className])} lazy {...props}>
    <LoginForm onClose={props.onClose} />
  </Modal>
);
