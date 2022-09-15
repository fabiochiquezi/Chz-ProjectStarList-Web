import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebase/firebaseSettings'
import { catalogI } from 'types/catalog'

interface returnData {
    list: catalogI[]
}

const getCatalogList = async (
    table: string,
    id: string
): Promise<returnData | null> => {
    const docRef = doc(db, table, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data() as returnData
    return null
}

export { getCatalogList }
