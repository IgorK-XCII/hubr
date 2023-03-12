declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type Tuple<T extends unknown[] = unknown[]> = Readonly<T>;

type ValueOf<T> = T extends object
  ? T[keyof T] : T extends Tuple
  ? T[number] : never

type ExtractOptionalKeys<T extends object> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]>
    ? never
    : K
}[keyof T], undefined>

type PickOptionalProperty<T extends object> = Pick<T, ExtractOptionalKeys<T>>
