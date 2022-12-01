import { auth } from '../../../../settings'
import { onAuthStateChanged, User } from 'firebase/auth'

type CallBack = (userGoogle: User | null) => void
export type AuthState = (callBack: CallBack) => void

const authState: AuthState = callBack => {
    onAuthStateChanged(auth, userGoogle => {
        callBack(userGoogle)
    })
}

export { authState }
