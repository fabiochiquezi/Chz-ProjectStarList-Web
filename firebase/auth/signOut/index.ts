import { auth } from '../../firebaseSettings'

export async function signOutFire(): Promise<void> {
    return await auth.signOut()
}
