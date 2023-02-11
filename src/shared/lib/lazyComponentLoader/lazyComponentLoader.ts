import { ComponentType, lazy } from 'react';

export const lazyComponentLoader = <
  T extends Record<string, ComponentType<unknown>>,
  C extends keyof T
  >(
    getFile: () => Promise<T>,
    component: C,
  ) => lazy(() => getFile().then((module) => ({ default: module[component] })));
