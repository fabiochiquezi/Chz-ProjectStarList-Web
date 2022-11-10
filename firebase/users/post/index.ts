import { doc, setDoc } from 'firebase/firestore'
import { db } from 'firebase/settings'

export type PostUser = (
    uid: string,
    data: {
        displayName: string
        email: string
    }
) => Promise<void>

const postUser: PostUser = async (uid, data) => {
    await setDoc(doc(db, 'users', uid), data)
}

export { postUser }
