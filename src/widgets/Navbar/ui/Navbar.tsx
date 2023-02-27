import { FC } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={clsx([cls.navbar, className])}>
    <div className={clsx([cls.links])} />
  </div>
);
