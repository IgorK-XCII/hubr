export type Tuple<T extends unknown[] = unknown[]> = Readonly<T>;

export type ValueOf<T> = T extends Record<string, unknown>
  ? T[keyof T] : T extends Tuple
  ? T[number] : never
