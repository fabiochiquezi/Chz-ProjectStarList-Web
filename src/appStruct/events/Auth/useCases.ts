import { User } from 'firebase/auth'

export type ISignUp = (afterSignUpCB: Array<(user: User) => Promise<User>>) => (user: User) => Promise<User>
export type ISignOut = () => Promise<void>
export type IAuthState = (callBack: (userGoogle: User | null) => void) => void
export type ISignIn = (afterSignUpCB: Array<(user: User) => Promise<User>>) => () => Promise<void>
