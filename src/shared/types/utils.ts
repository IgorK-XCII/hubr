export type Tuple<T extends unknown[] = unknown[]> = Readonly<T>;

export type ValueOf<T> = T extends object
  ? T[keyof T] : T extends Tuple
  ? T[number] : never

type ExtractOptionalKeys<T extends object> = {
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T]

export type PickOptionalProperty<T extends object> = Pick<T, ExtractOptionalKeys<T>>
