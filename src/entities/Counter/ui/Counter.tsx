import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import { counterActions, getCounterValue } from '../model';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

export const Counter: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};
