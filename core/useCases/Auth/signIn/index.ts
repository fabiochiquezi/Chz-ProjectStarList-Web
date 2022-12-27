import { signInWithGoogle } from './../index'
import { signUp } from '../signUp'
import { getUser } from '../../User/getUser'
import { User } from 'firebase/auth'

export type SignIn = () => Promise<User>

const ifNoUserSignUp = async (user: User) =>
  await getUser(user.uid) ?? await signUp(user)

const signIn: SignIn = async () => {
  const authUser = (await signInWithGoogle()).user
  const { displayName, email, uid } = authUser

  const haveAllInf = email && displayName && uid
  if (!haveAllInf) throw new Error('Data invalid')

  const getUserFromID = await getUser(uid)
  if (!getUserFromID) await signUp(email, displayName, uid)

  return authUser
}

export { signIn }
