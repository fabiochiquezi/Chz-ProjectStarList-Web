import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { getFireDoc } from 'firebase/firestore/get'
import { auth, db } from '../../firebaseSettings'
import { doc, setDoc } from 'firebase/firestore'

interface resp {
    ok: boolean
    user: null | User
    errors: string[]
}

const signInFire = async (): Promise<resp> => {
    try {
        const provider = new GoogleAuthProvider()
        const authUser = await signInWithPopup(auth, provider)
        const { displayName, email, uid } = authUser.user

        const getUser = await getFireDoc('users', uid)
        if (getUser == null) {
            await setDoc(doc(db, 'users', uid), { displayName, email })
            await setDoc(doc(db, 'doing', uid), { list: [] })
            await setDoc(doc(db, 'illdo', uid), { list: [] })
            await setDoc(doc(db, 'did', uid), { list: [] })
        }
        return {
            ok: true,
            user: authUser.user,
            errors: []
        }
    } catch (e) {
        return {
            ok: false,
            user: null,
            errors: ['Something went wrong']
        }
    }
}

export { signInFire }
