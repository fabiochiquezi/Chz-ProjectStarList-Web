import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'

export async function newCatalog(userName: string): Promise<void> {
    await setDoc(doc(db, 'catalog', userName), {})
}
