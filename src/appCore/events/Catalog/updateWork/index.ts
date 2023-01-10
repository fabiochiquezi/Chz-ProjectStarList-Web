import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../../../../appShare/settings/fireSettings'
import { postCatalog } from '../postCatalog'

export type IUpdateWork = (oldCatalog: string, newCatalog: string) => (userName: string) => (work: any) => Promise<void>

export const updateWork: IUpdateWork = (oldCatalog, newCatalog) => userName => async work => {
  const docRef = doc(db, 'catalog', userName, oldCatalog, work)
  const getRef = await getDoc(docRef)
  const exist = getRef.exists()
  if (!exist) return
  await deleteDoc(docRef)
  await postCatalog(newCatalog, userName)(getRef.data() as any)
}
