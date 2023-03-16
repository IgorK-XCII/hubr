import {
  FC, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { clsx } from '@/shared/lib';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'type'> {
 className?: string;
 value?: string | number;
 onChange?: (value: string) => void;
 placeholder?: string;
 autoFocus?: boolean;
 readOnly?: boolean;
 type?: 'text' | 'number'
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

    if (type === 'number' && /[^0-9]+/.test(val)) return;

    onChange?.(val);
    setCaretPosition(val.length);
  };

  const handleSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e.currentTarget.selectionStart || 0);
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
          type="text"
          value={value}
          onChange={handleChange}
          onSelect={handleSelect}
          className={cls.input}
          readOnly={readOnly}
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
