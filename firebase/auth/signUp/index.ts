import { getUserName } from '../../../_helpers/userName'
import { postCatalog } from 'firebase/catalog/post'
import { postUser } from 'firebase/users/post'

export type SignUp = (
    email: string,
    displayName: string,
    uid: string
) => Promise<void>

const signUp: SignUp = async (email, displayName, uid) => {
    const userName = getUserName(email)
    await postUser(uid, { displayName, email })
    await postCatalog(userName)
}

export { signUp }
