import { User } from '../../../domain'

export type ISetUser = (id: string) => (data: Record<string, unknown>) => Promise<void>
export type IGetUser = (id: string) => Promise<User>
