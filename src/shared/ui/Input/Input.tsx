import {
  FC, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { clsx } from '@/shared/lib';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
 className?: string;
 value?: string;
 onChange?: (value: string) => void;
 placeholder?: string;
 autoFocus?: boolean;
}

export const Input: FC<InputProps> = memo(({
  className, value, onChange, type = 'text', placeholder, autoFocus, ...restProps
}) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    onChange?.(val);
    setCaretPosition(val.length);
  };

  const handleSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e.currentTarget.selectionStart);
  };

  useEffect(() => {
    if (autoFocus) ref.current.focus();
  }, [autoFocus]);

  return (
    <div className={clsx([cls.inputWrapper, className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          {...restProps}
          ref={ref}
          type={type}
          value={value}
          onChange={handleChange}
          onSelect={handleSelect}
          className={cls.input}
        />
        <span
          className={cls.caret}
          style={{
            left: `${caretPosition * 9}px`,
          }}
        />
      </div>
    </div>
  );
});
