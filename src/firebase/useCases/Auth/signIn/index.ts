import { ISignIn } from '../useCases'
import { ifNoUserSignUp } from './ifNoUserSignUp'
import { signInWithGoogle } from './../../../_helpers'

export const signIn: ISignIn = async () => await signInWithGoogle(ifNoUserSignUp)
