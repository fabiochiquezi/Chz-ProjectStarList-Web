export const pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T) =>
  fns.reduce((acc, fn) => fn(acc), value)

export const pipeArg = <T>(...fns: Array<(arg: T) => unknown>) =>
  async (value: T) => { fns.map(el => el(value)) }

// to improve
type IFnsPipe<T> = Array<(arg: (T | any)) => Promise<T | any>>
type IAsyncPipe = <T, Return>(...fns: IFnsPipe<T>) => (value: T) => Return
export const asyncPipe: IAsyncPipe = (...fns) => (value: any) =>
  fns.reduce(async (acc, fn) => await fn(await acc), value)

