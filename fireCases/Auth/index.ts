import { IAuthState, ISignIn, ISignOut, ISignUp } from './useCases'
import { authState } from './authState'
import { signOut } from './signOut'
import { signIn } from './signIn'
import { signUp } from './signUp'

export interface IAuthFirebase {
  authState: IAuthState;
  signIn: ISignIn
  signOut: ISignOut;
  signUp: ISignUp
}

export const AuthFirebase: IAuthFirebase = ({
  authState,
  signIn,
  signOut,
  signUp
})
