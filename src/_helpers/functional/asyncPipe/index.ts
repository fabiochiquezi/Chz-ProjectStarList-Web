type IFnsPipe<T> = Array<(arg: (T | any)) => Promise<T | any>>
type IAsyncPipe = <T, Return>(...fns: IFnsPipe<T>) => (value: T) => Return

export const asyncPipe: IAsyncPipe = (...fns) => (value: any) =>
  fns.reduce(async (acc, fn) => await fn(await acc), value)
