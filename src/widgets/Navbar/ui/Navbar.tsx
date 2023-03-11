import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { clsx, useAppDispatch } from '@/shared/lib';
import cls from './Navbar.module.scss';
import { Button } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const handleLogout = () => dispatch(userActions.logout());

  if (authData) {
    return (
      <div className={clsx([cls.navbar, className])}>
        <div className={clsx([cls.links])}>
          <Button theme="clear-inverted" onClick={handleLogout}>
            {t('logout')}
          </Button>
        </div>
      </div>
    );
  }

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
});
