import { Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { RootState, RootStateLazyReducerKey } from './RootState';
import { rootReducer } from '../config/store';

export type RootReducer = typeof rootReducer

export type LazyReducers = Partial<ReducersMapObject<Required<PickOptionalProperty<RootState>>>>;

export type LazyReducersWithAny= {[key in RootStateLazyReducerKey]?: Reducer};
