import { postCatalog } from '../../catalog/post'
import { postUser } from '../../user/post'

export type SignUp = (
  email: string,
  displayName: string,
  uid: string
) => Promise<void>

const signUp: SignUp = async (email, displayName, uid) => {
  const getUserName = (email: string): string => email?.split('@')[0]
  const userName = getUserName(email)
  await postUser(uid, { displayName, email })
  await postCatalog(userName)
}

export { signUp }
