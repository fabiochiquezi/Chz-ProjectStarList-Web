import { UserFirebase } from './../../User/index'
import { User } from 'firebase/auth'

const { setUser } = UserFirebase()

export const createUser = async (user: User): Promise<void> =>
  await setUser(user.uid)({ displayName: user.displayName, email: user.email })
