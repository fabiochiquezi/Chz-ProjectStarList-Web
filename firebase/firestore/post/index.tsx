import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebaseSettings'

export async function postFireDoc(
    collection: string,
    id: string,
    data: Record<string, any>
) {
    const ref = doc(db, collection, id)
    await updateDoc(ref, { list: arrayUnion({ ...data }) })
}
