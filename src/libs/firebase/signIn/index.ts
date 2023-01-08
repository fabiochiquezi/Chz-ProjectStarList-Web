import { auth } from '../../../appShare/settings/fireSettings'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'

export const signInWithGoogle = async (callBack: (user: User) => unknown): Promise<void> => {
  const provider = new GoogleAuthProvider()
  const user = (await signInWithPopup(auth, provider)).user
  callBack(user)
}
