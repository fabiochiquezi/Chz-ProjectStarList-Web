import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebaseSettings'

export function authGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}
