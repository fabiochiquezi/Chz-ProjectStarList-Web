import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseSettings'

export async function getFireDoc(col: string) {
    const docRef = doc(db, 'doing', 'T6TVAS4DnBhAJGlRXKQTes0Yo6m2')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data()
    throw new Error('Data not found')
}
