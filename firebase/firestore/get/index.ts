import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseSettings'

export async function getFireDoc(col: string, id: string) {
    const docRef = doc(db, col, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data()
    throw new Error('Data not found')
}
