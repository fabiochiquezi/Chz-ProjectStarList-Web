import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'
import { catalogI } from '../../../general/types/catalog'

const setCatalogList = async (
    table: string,
    id: string,
    data: catalogI[]
): Promise<void> => {
    const ref = doc(db, table, id)
    await setDoc(ref, { list: data }, { merge: true })
}

export { setCatalogList }
