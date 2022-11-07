import { auth, db } from '../../settings'
import { doc, setDoc } from 'firebase/firestore'
import { getUser as getUserFirebase } from 'firebase/users/getUser'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { addUser } from 'firebase/users/addUser'

const signIn = async (): Promise<User> => {
    const provider = new GoogleAuthProvider()
    const authUser = await signInWithPopup(auth, provider)
    const { displayName, email, uid } = authUser.user
    const getUser = await getUserFirebase(uid)
    if (getUser === null) {
        await addUser(uid, { displayName, email })
        await setDoc(doc(db, 'doing', uid), { list: [] })
        await setDoc(doc(db, 'illdo', uid), { list: [] })
        await setDoc(doc(db, 'did', uid), { list: [] })
    }
    return authUser.user
}

export { signIn }
