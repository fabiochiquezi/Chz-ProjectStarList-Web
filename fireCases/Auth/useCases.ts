import { User } from 'firebase/auth'

export type ISignUp = (user: User) => Promise<void>
export type ISignOut = () => Promise<void>
export type IAuthState = (callBack: (userGoogle: User | null) => void) => void
export type ISignIn = () => Promise<void>
