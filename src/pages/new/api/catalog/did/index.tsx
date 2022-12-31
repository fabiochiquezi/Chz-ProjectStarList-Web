import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../../../../../fireSettings'
import { v4 as uuidv4 } from 'uuid'

const postCatalogDid = async (data: any, userId: string): Promise<void> => {
  const newData = {
    ...data,
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp()
  }
  await setDoc(doc(db, 'catalog', userId, 'did', uuidv4()), newData)
}

export { postCatalogDid }
