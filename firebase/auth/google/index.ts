import { db } from 'firebase/firebaseSettings'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebaseSettings'

export function authGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

/*
export async function authGoogle2() {
    const provider = new GoogleAuthProvider()
    const authUser = await signInWithPopup(auth, provider)
    const { displayName, email, uid } = authUser.user

    const userDocRef = doc(db, 'users', uid)
    const getUser = await getDoc(userDocRef)

    if (!getUser) {
        await setDoc(doc(db, 'users', uid), { displayName, email })
        await setDoc(doc(db, 'doing', uid), { list: [] })
        await setDoc(doc(db, 'illdo', uid), { list: [] })
        await setDoc(doc(db, 'did', uid), { list: [] })
    }

    return authUser
}
*/
