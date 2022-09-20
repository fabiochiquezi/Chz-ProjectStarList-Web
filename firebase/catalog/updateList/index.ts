import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/firebaseSettings'
import { catalogI } from 'store/catalog/types'

const updateCatalogList = async (
    oldTable: string,
    newTable: string,
    id: string,
    data: catalogI[]
): Promise<void> => {
    const refOld = doc(db, oldTable, id)
    await setDoc(refOld, { list: data }, { merge: true })
}

export { updateCatalogList }
