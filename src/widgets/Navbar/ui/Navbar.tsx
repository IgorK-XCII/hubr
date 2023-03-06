import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { Button } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  return (
    <div className={clsx([cls.navbar, className])}>
      <div className={clsx([cls.links])}>
        <Button theme="clear-inverted" onClick={handleOpenAuthModal}>
          {t('login')}
        </Button>
      </div>
      <LoginModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </div>
  );
};
