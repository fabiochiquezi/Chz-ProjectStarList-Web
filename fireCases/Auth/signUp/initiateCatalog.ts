import { User } from 'firebase/auth'
import { CatalogFirebase } from './../../Catalog/index'
const { setEmptyCatalog } = CatalogFirebase()

const getUserName = (email: string): string => email?.split('@')[0]

export const initiateCatalog = async (user: User): Promise<void> =>
  await setEmptyCatalog(getUserName(user.email as string))
