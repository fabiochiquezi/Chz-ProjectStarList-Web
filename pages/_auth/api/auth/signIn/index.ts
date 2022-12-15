import { signUp } from '../signUp'
import { auth } from '../../../../firebase'
import { getUser as getUserFirebase } from '../../user/get'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'

export type SignIn = () => Promise<User>

const signIn: SignIn = async () => {
  const provider = new GoogleAuthProvider()
  const authUser = await signInWithPopup(auth, provider)
  const { displayName, email, uid } = authUser.user
  const haveAllInf = email && displayName && uid
  if (!haveAllInf) throw new Error('Data invalid')

  const getUser = await getUserFirebase(uid)
  if (!getUser) await signUp(email, displayName, uid)

  return authUser.user
}

export { signIn }
