import { auth } from '../../settings'
import { ISignOut } from '../useCases'

export const signOut: ISignOut = async () => await auth.signOut()
