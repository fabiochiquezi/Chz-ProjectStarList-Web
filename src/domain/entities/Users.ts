import { User as UserFirebase } from 'firebase/auth'

export interface User { userName: string; email: string }
export type UserAuth = UserFirebase
export type UserFull = UserAuth & User
