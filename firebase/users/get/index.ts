import { doc, getDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'
import { User } from 'types/users'

type Fn = (id: string) => Promise<null | User>

const getUser: Fn = async id => {
    const docRef = doc(db, 'users', id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return docSnap.data() as User
    return null
}

export { getUser }
