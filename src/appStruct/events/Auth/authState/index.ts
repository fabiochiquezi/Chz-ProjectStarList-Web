import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../../../fireSettings'
import { IAuthState } from '../useCases'

export const authState: IAuthState = callBack =>
  onAuthStateChanged(auth, userGoogle =>
    callBack(userGoogle)
  )

