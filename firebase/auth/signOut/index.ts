import { auth } from '../../firebaseSettings'

export async function signOut() {
    return auth.signOut()
}
