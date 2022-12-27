import { userFns } from './../_helpers/index'

export type ISetUser = (id: string) => (data: Record<string, string>) => Promise<void>

export const setUser: ISetUser = (id) =>
  async data => await userFns.setDocData(id)(data)
