import {
  FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { clsx } from '@/shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';

interface ModalProps {
 className?: string;
 isOpen?: boolean;
 onClose?: () => void;
 lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = (e: MouseEvent) => e.stopPropagation();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (isOpen) setIsOpening(true);

    return () => setIsOpening(false);
  }, [isOpen]);

  useEffect(() => () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const mods = {
    [cls.opened]: isOpening,
    [cls.closing]: isClosing,
  };

  if (lazy && !isOpen) return null;

  return (
    <Portal>
      <div className={clsx([cls.modal, className], mods)}>
        <div role="banner" className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
