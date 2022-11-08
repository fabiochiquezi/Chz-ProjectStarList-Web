import { auth } from '../../settings'
import { addUser } from 'firebase/users/add'
import { getUserName } from 'helpers/userName'
import { newCatalog } from 'firebase/catalog/new'
import { getUser as getUserFirebase } from 'firebase/users/get'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'

async function createNewUser(
    email: string,
    displayName: string,
    uid: string
): Promise<void> {
    const userName = getUserName(email)
    await addUser(uid, { displayName, email })
    await newCatalog(userName)
}

const signIn = async (): Promise<User> => {
    const provider = new GoogleAuthProvider()
    const authUser = await signInWithPopup(auth, provider)
    const { displayName, email, uid } = authUser.user

    const hasEmailAndDisplayName = email && displayName
    if (!hasEmailAndDisplayName) throw new Error('Data invalid')

    const getUser = await getUserFirebase(uid)
    const userDoesntExist = getUser === null
    if (userDoesntExist) await createNewUser(email, displayName, uid)

    return authUser.user
}

export { signIn }
