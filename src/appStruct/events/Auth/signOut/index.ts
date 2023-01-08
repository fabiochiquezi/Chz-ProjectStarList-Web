import { auth } from '../../../../../fireSettings'
import { ISignOut } from '../useCases'

export const signOut: ISignOut = async () => await auth.signOut()
