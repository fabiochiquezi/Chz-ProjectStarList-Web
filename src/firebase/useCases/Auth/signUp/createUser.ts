import { getUserNameFromEmail } from './../../_utils/getUserName'
import { narrowString } from '../../../../_helpers/'
import { setUser } from './../../User/setUser'
import { User } from 'firebase/auth'

const getUserName = (user: User): string => getUserNameFromEmail(
  narrowString(user.email)
)

export const createUser = async (user: User): Promise<User> => {
  await setUser(user.uid)({ userName: getUserName(user), email: user.email })
  return user
}
