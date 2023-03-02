import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { Button, Modal } from '@/shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleAuthModal = useCallback(() => setIsAuthModalOpen((prev) => !prev), []);

  return (
    <div className={clsx([cls.navbar, className])}>
      <div className={clsx([cls.links])}>
        <Button theme="clear-inverted" onClick={toggleAuthModal}>
          {t('login')}
        </Button>
      </div>
      <Modal isOpen={isAuthModalOpen} onCLose={toggleAuthModal}>
        {t('auth')}
      </Modal>
    </div>
  );
};
