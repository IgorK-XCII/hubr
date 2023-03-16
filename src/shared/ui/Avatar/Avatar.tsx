import { CSSProperties, FC, memo } from 'react';
import { clsx } from '@/shared/lib';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar: FC<AvatarProps> = memo(({
  className, size, alt, src,
}) => {
  const styles: CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <img
      className={clsx([cls.avatar, className])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
});
