import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from 'pages/share/settings/firebase'
import { v4 as uuidv4 } from 'uuid'

const postCatalogDoing = async (data: any, userId: string): Promise<void> => {
  const newData = {
    ...data,
    createdAt: serverTimestamp(),
    lastUpdate: serverTimestamp()
  }
  await setDoc(doc(db, 'catalog', userId, 'doing', uuidv4()), newData)
}

export { postCatalogDoing }
