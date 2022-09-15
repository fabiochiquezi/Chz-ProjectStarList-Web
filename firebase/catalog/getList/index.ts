import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebase/firebaseSettings'
import { catalogI } from 'types/catalog'

const getCatalogList = async (
    table: string,
    id: string
): Promise<catalogI[] | null> => {
    const docRef = doc(db, table, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data() as catalogI[]
    return null
}

export { getCatalogList }
