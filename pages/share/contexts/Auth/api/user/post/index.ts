import { doc, setDoc } from 'firebase/firestore'
import { User } from '../../../../../types/Users'
import { db } from '../../../../../settings'

export type PostUser = (uid: string, data: User) => Promise<void>

const postUser: PostUser = async (uid, data) => {
  await setDoc(doc(db, 'users', uid), data)
}

export { postUser }
