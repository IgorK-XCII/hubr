import { useStore } from 'react-redux';
import { useLayoutEffect, useRef } from 'react';
import {
  LazyReducers, StoreWithManager,
} from '@/app/providers';
import { getObjectEntries } from '../../getObjectEntries';
import { getObjectKeys } from '../../getObjectKeys';
import { useAppDispatch } from '../useAppDispatch';

export const useLazyReducersLoader = (
  reducers: LazyReducers,
  removeAfterUnmount = true,
) => {
  const alreadyMounted = useRef<boolean | null>(null);
  const dispatch = useAppDispatch();
  const store = useStore() as StoreWithManager;

  useLayoutEffect(() => {
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
