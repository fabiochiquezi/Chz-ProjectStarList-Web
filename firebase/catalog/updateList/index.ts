import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'
import { catalogI } from '../../../general/types/catalog'

const updateCatalogList = async (
    oldTable: string,
    newTable: string,
    id: string,
    data: catalogI[]
): Promise<void> => {
    const refOld = doc(db, oldTable, id)
    const isTheSameTable = oldTable === newTable
    if (isTheSameTable) {
        await setDoc(refOld, { list: data }, { merge: true })
    }
}

export { updateCatalogList }
