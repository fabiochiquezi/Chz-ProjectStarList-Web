export type IOverwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
