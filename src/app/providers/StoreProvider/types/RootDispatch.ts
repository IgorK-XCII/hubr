import { createReduxStore } from '../config/store';

export type RootDispatch = ReturnType<typeof createReduxStore>['dispatch']
