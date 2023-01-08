import { User } from 'firebase/auth'
import { getFireFns } from '../../../../libs/firebase'
import { getUserNameFromEmail } from '../../../../appStruct/events/_utils/getUserName'

const { setDocData } = getFireFns('catalog')

export const initiateCatalog = async (user: User): Promise<User> => {
  await setDocData(getUserNameFromEmail(user.email as string))({})
  return user
}
