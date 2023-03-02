import {
  FC, MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { clsx } from '@/shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';

interface ModalProps {
 className?: string;
 isOpen?: boolean;
 onCLose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onCLose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const handleClose = useCallback(() => {
    if (onCLose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onCLose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onCLose]);

  const handleContentClick = (e: MouseEvent) => e.stopPropagation();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleClose();
  }, [handleClose]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  return (
    <Portal>
      <div className={clsx([cls.modal, className], mods)}>
        <div role="banner" className={cls.overlay} onClick={handleClose} onKeyDown={onCLose}>
          <div className={cls.content} onClick={handleContentClick}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
