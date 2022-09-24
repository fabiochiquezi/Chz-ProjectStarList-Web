import { auth } from '../../settings'

export async function signOutFire(): Promise<void> {
    return await auth.signOut()
}
