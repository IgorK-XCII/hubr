import { FC } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = (props) => {
  const { className, svg: Svg } = props;

  return (
    <Svg className={clsx([cls.icon, className])} />
  );
};
