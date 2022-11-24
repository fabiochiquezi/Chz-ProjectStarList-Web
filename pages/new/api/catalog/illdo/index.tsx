import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from 'pages/share/settings'
import { v4 as uuidv4 } from 'uuid'

const postCatalogIlldo = async (data: any, userId: string): Promise<void> => {
    const newData = {
        ...data,
        createdAt: serverTimestamp(),
        lastUpdate: serverTimestamp()
    }
    await setDoc(doc(db, 'catalog', userId, 'illdo', uuidv4()), newData)
}

export { postCatalogIlldo }
