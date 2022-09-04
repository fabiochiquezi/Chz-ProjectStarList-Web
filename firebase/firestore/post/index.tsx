import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebaseSettings'

export async function postFireDoc(
    state: string,
    user: string,
    data: Record<string, any>
) {
    const ref = doc(db, state, user)
    await updateDoc(ref, { list: arrayUnion({ ...data }) })
}
