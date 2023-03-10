import { useStore } from 'react-redux';
import { useEffect, useRef } from 'react';
import {
  RootReducer, StoreWithManager, useAppDispatch,
} from '@/app/providers';
import { getObjectEntries } from '../getObjectEntries';
import { getObjectKeys } from '../getObjectKeys';

export type LazyReducers = Partial<RootReducer>;

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
        dispatch({ type: `@INIT ${key}` });
      });

      alreadyMounted.current = true;
    }

    return () => {
      if (!removeAfterUnmount) return;

      getObjectKeys(reducers).forEach((key) => {
        store.reducerManager.remove(key);
        dispatch({ type: `@DESTROY ${key}` });
      });
    };
  }, [store, dispatch, removeAfterUnmount, reducers]);
};
