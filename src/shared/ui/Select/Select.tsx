import {
  ChangeEvent, useMemo,
} from 'react';
import { clsx } from '@/shared/lib';
import cls from './Select.module.scss';

export interface SelectItem<T> {
  value: T;
  content: string;
}

export type SelectItems<T> = SelectItem<T>[]

interface SelectProps<T> {
  className?: string;
  label?: string;
  items?: SelectItems<T>;
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean;
}

export const Select = <T extends string | number >({
  className,
  label,
  items,
  value,
  onChange,
  readOnly,
}: SelectProps<T>) => {
  const list = useMemo(() => items?.map((item) => (
    <option
      key={item.value}
      value={item.value}
    >
      {item.content}
    </option>
  )), [items]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  const mods = {
    [cls.readOnly]: readOnly,
  };

  return (
    <div className={clsx([cls.selectWrapper, className], mods)}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={handleChange}
        disabled={readOnly}
      >
        {list}
      </select>
    </div>
  );
};
