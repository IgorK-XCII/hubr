export const getObjectEntries = <
  T extends Record<string, any>,
  K extends keyof T
>(entity: T): [keyof T, T[K]][] => Object.entries(entity);
