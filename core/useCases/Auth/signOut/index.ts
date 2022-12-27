import { auth } from '../../../_settings/firebase'

export type SignOut = () => Promise<void>
export const signOut: SignOut = async () => await auth.signOut()
