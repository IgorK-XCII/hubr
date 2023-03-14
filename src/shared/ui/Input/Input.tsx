import {
  FC, InputHTMLAttributes, KeyboardEvent, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { clsx } from '@/shared/lib';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
 className?: string;
 value?: string | number;
 onChange?: (value: string) => void;
 placeholder?: string;
 autoFocus?: boolean;
 readOnly?: boolean;
}

export const Input: FC<InputProps> = memo(({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autoFocus,
  readOnly,
  ...restProps
}) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    onChange?.(val);
    setCaretPosition(val.length);
  };

  const handleSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    if (type === 'number') {
      setCaretPosition(String(value).length || 0);
      return;
    }

    setCaretPosition(e.currentTarget.selectionStart || 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type !== 'number') return;

    if (['e', 'E', '+', '-'].includes(e.key)) e.preventDefault();

    if (e.code === 'ArrowRight') {
      setCaretPosition(
        (prev) => (prev === String(value).length ? prev : prev + 1),
      );
    }
    if (e.code === 'ArrowLeft') {
      setCaretPosition(
        (prev) => (prev ? prev - 1 : prev),
      );
    }
  };

  useEffect(() => {
    if (autoFocus) ref.current?.focus();
  }, [autoFocus]);

  const mods = {
    [cls.readOnly]: readOnly,
  };

  return (
    <div className={clsx([cls.inputWrapper, className], mods)}>
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
          readOnly={readOnly}
          onKeyDown={handleKeyDown}
        />
        {!readOnly && (
          <span
            className={cls.caret}
            style={{
              left: `${caretPosition * 9}px`,
            }}
          />
        )}
      </div>
    </div>
  );
});
