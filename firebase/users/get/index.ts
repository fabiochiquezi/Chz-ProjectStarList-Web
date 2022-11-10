import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'
import { User } from 'types/Users'

export type GetUser = (id: string) => Promise<User | undefined>

const getUser: GetUser = async id => {
    const docRef = doc(db, 'users', id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data() as User
}

export { getUser }
