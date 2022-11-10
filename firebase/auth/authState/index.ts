import { auth } from './../../settings'
import { onAuthStateChanged, User } from 'firebase/auth'

type CallBack = (userGoogle: User) => void
export type AuthState = (callBack: CallBack) => void

const authState: AuthState = callBack => {
    onAuthStateChanged(auth, userGoogle => {
        if (userGoogle) callBack(userGoogle)
    })
}

export { authState }
