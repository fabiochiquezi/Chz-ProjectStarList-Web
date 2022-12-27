import { setUser } from './../../User/setUser/index'
import { User } from 'firebase/auth'

export type SignUp = (user: User) => Promise<void>

const signUp: SignUp = async (user: User) => {
  const { email, displayName, uid } = user
  if (!email || !displayName) throw new Error('invalid data')
  const getUserName = (email: string): string => email?.split('@')[0]
  const userName = getUserName(email)
  await setUser(uid)({ displayName, email })
  // await postCatalog(userName)
}

export { signUp }
