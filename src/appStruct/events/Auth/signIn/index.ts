import { ISignIn } from '../useCases'
import { ifNoUserSignUp } from './ifNoUserSignUp'
import { signInWithGoogle } from './../../../../libs/firebase'

export const signIn: ISignIn = afterSignUpCB => async () => await signInWithGoogle(
  ifNoUserSignUp(afterSignUpCB)
)
