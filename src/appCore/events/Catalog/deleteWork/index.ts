import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../../appShare/settings/fireSettings'

export type IGetCatalog = (catalog: string) => (userName: string) => (work: string) => Promise<void>

export const deleteWork: IGetCatalog = catalog => userName => async work => {
  const getDoc = doc(db, 'catalog', userName, catalog, work)
  await deleteDoc(getDoc)
}
