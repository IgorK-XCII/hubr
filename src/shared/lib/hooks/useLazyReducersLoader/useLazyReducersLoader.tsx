import { useStore } from 'react-redux';
import { useEffect, useRef } from 'react';
import {
  RootReducer, StoreWithManager,
} from '@/app/providers';
import { getObjectEntries } from '../../getObjectEntries';
import { getObjectKeys } from '../../getObjectKeys';
import { PickOptionalProperty } from '@/shared/types';
import { useAppDispatch } from '../useAppDispatch';

export type LazyReducers = PickOptionalProperty<RootReducer>;

export const useLazyReducersLoader = (
  reducers: LazyReducers,
  removeAfterUnmount = true,
) => {
  const alreadyMounted = useRef<boolean>();
  const dispatch = useAppDispatch();
  const store = useStore() as StoreWithManager;

  useEffect(() => {
    if (!alreadyMounted.current) {
      getObjectEntries(reducers).forEach(([key, reducer]) => {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` });
      });

      alreadyMounted.current = true;
    }

    if (!removeAfterUnmount) return;

    return () => {
      getObjectKeys(reducers).forEach((key) => {
        store.reducerManager.remove(key);
        dispatch({ type: `@DESTROY ${key} reducer` });
      });
    };
  }, [store, dispatch, removeAfterUnmount, reducers]);
};
