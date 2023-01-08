import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { Movie, Serie } from '../../../domain'
import { v4 as uuidv4 } from 'uuid'
import { db } from 'fireSettings'

const postCatalog = (catalogType: string, userId: string) =>
  async (data: Movie | Serie): Promise<void> => {
    const newData = {
      ...data,
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp()
    }
    await setDoc(doc(db, 'catalog', userId, catalogType, uuidv4()), newData)
  }

export { postCatalog }
