import { auth } from './../../firebaseSettings'
import { onAuthStateChanged } from 'firebase/auth'

const authStateFirebase = (callBack: any): void => {
    onAuthStateChanged(auth, userGoogle => {
        callBack(userGoogle)
    })
}

export { authStateFirebase }
