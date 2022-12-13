import { doc, setDoc } from 'firebase/firestore'
import { User } from '../../../../share/types'
import { db } from '../../../../share/settings/firebase'

export type PostUser = (uid: string, data: User) => Promise<void>

const postUser: PostUser = async (uid, data) => {
  await setDoc(doc(db, 'users', uid), data)
}

export { postUser }
