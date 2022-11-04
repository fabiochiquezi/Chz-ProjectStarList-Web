import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../settings'
import { getCatalogList } from 'firebase/catalog/getList'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'

const signIn = async (): Promise<User> => {
    const provider = new GoogleAuthProvider()
    const authUser = await signInWithPopup(auth, provider)
    const { displayName, email, uid } = authUser.user

    const getUser = await getCatalogList('users', uid)
    if (getUser == null) {
        await setDoc(doc(db, 'users', uid), { displayName, email })
        await setDoc(doc(db, 'doing', uid), { list: [] })
        await setDoc(doc(db, 'illdo', uid), { list: [] })
        await setDoc(doc(db, 'did', uid), { list: [] })
    }
    return authUser.user
}

export { signIn }
