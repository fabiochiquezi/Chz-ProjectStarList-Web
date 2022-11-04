import { auth } from '../../settings'

export async function signOut(): Promise<void> {
    return await auth.signOut()
}
