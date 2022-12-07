import { auth } from '../../../../../settings/firebase'

export type SignOut = () => Promise<void>

const signOut: SignOut = async () => {
  return await auth.signOut()
}

export { signOut }
