import { auth } from './../../firebaseSettings'
import { onAuthStateChanged } from 'firebase/auth'

export const authState = (callBack: any) => {
    onAuthStateChanged(auth, userGoogle => {
        callBack(userGoogle)
    })
}
