import { onAuthStateChanged } from 'firebase/auth'
import { IAuthState } from '../useCases'
import { auth } from '../../../settings'

export const authState: IAuthState = callBack =>
  onAuthStateChanged(auth, userGoogle =>
    callBack(userGoogle)
  )

