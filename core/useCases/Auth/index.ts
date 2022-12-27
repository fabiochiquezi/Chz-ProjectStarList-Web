import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth'
import { auth } from '../../_settings/firebase/settings'

export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider()
  return await signInWithPopup(auth, provider)
}
