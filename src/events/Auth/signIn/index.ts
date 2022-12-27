import { ISignIn } from '../useCases'
import { ifNoUserSignUp } from './ifNoUserSignUp'
import { signInWithGoogle } from './../../signInThird'

export const signIn: ISignIn = async () => await signInWithGoogle(ifNoUserSignUp)
