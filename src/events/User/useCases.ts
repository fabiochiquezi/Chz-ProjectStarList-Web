import { User } from '../../domain'

type ISetUser = (id: string) => (data: Record<string, unknown>) => Promise<void>
type IGetUser = (id: string) => Promise<User>

export type { ISetUser, IGetUser }
