export type NestedKeys<T> = {
  [K in keyof T]: T[K] extends object
  ? `${K}` | `${K}.${NestedKeys<T[K]>}`
  : `${K}`;
}[keyof T];

export type NestedRoute<T> = T extends object
  ? {
    [K in keyof T]: K extends string | number
    ? `${K}` | `${K}.${NestedRoute<T[K]>}`
    : never;
  }[keyof T]
  : never;
