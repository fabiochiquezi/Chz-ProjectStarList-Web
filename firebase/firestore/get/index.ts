import { db } from './../../firebaseSettings'
import { doc, getDoc } from 'firebase/firestore'

export async function getFireDoc(col: string, id: string) {
    const docRef = doc(db, col, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data()
    return null
}
