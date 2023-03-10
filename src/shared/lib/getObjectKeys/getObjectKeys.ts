export const getObjectKeys = <
  T extends Record<string, unknown>
>(entity: T): (keyof T)[] => Object.keys(entity);
