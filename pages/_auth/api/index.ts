import { SignOut, signOut } from './auth/signOut/index'
import { AuthState, authState } from './auth/authState/index'
import { SignIn, signIn } from './auth/signIn/index'

export interface IAuthFirebaseAPI { signIn: SignIn, state: AuthState, signOut: SignOut }
export const AuthFirebaseAPI: IAuthFirebaseAPI = { signIn, state: authState, signOut }

export { authState } from './auth/authState'
export { getUser } from './user/get'
export { postCatalog } from './catalog/post'
export { postUser } from './user/post'
export { signIn } from './auth/signIn'
export { signOut } from './auth/signOut'
export { signUp } from './auth/signUp'
export type { AuthState } from './auth/authState'
export type { GetUser } from './user/get'
export type { PostCatalog } from './catalog/post'
export type { PostUser } from './user/post'
export type { SignIn } from './auth/signIn'
export type { SignOut } from './auth/signOut'
export type { SignUp } from './auth/signUp'

