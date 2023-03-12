import { ComponentType, lazy } from 'react';

export const lazyComponentLoader = <
  T extends Record<string, ComponentType<any>>,
  C extends keyof T
  >(
    getFile: () => Promise<T>,
    component: C,
  ) => lazy(() => getFile().then((module) => ({ default: module[component] })));
