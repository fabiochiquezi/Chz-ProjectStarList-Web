import { ISignIn } from '../useCases'
import { ifNoUserSignUp } from './ifNoUserSignUp'
import { signInWithGoogle } from './../../../../libs/helpers'

export const signIn: ISignIn = async () => await signInWithGoogle(ifNoUserSignUp)
