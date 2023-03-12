import { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { LazyReducers } from '../types';
import { RootState } from '../types/RootState';

interface StoreProviderProps {
  initialState?: RootState;
  lazyReducers?: LazyReducers;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, lazyReducers }) => {
  const store = createReduxStore(initialState, lazyReducers);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
