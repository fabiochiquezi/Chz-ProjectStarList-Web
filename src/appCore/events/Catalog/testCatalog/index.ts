import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../../appShare/settings/fireSettings'


export const verifyCatalogExists = async (userName: string): Promise<boolean> =>
  (await getDoc(doc(db, 'catalog', userName))).exists()

