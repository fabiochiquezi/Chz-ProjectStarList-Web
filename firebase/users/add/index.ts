import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'

interface Data {
    displayName: string | null
    email: string | null
}

export async function addUser(uid: string, data: Data): Promise<void> {
    await setDoc(doc(db, 'users', uid), data)
}
