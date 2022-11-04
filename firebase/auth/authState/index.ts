import { auth } from './../../settings'
import { onAuthStateChanged } from 'firebase/auth'

const authState = (callBack: any): void => {
    onAuthStateChanged(auth, userGoogle => {
        callBack(userGoogle)
    })
}

export { authState }
