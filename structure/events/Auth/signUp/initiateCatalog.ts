import { User } from 'firebase/auth'
import { getUserNameFromEmail } from '../../_utils/getUserName'
import { setEmptyCatalog } from './../../Catalog/setEmptyCatalog'

export const initiateCatalog = async (user: User): Promise<User> => {
  await setEmptyCatalog(getUserNameFromEmail(user.email as string))
  return user
}
