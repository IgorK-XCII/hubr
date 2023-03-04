import { createReduxStore } from '../config/store';

export type RootReducer = ReturnType<typeof createReduxStore>['dispatch']
