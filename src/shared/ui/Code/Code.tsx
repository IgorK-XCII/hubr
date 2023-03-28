import { FC, memo } from 'react';
import { clsx } from '@/shared/lib/clsx';
import cls from './Code.module.scss';
import { Button } from '../Button';
import CopyIcon from '../../assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  content: string;
}

export const Code: FC<CodeProps> = memo((props) => {
  const { className, content } = props;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <pre className={clsx([cls.code, className])}>
      <code>
        {content}
      </code>
      <Button
        className={cls.copy}
        theme="clear"
        onClick={handleCopy}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
    </pre>
  );
});
