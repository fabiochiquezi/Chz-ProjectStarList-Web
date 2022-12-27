import { User } from 'firebase/auth'
import { UserFirebase } from './../../../User/index'
import { signUp } from './../../signUp/index'
const { getUser } = UserFirebase()

const ifNoUserSignUp = async (user: User): Promise<void> =>
  await getUser(user.uid) ?? await signUp(user)

export { ifNoUserSignUp }
