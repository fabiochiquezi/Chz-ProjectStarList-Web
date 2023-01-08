import { auth } from '../../../../appShare/settings/fireSettings'
import { onAuthStateChanged } from 'firebase/auth'
import { IAuthState } from '../useCases'

export const authState: IAuthState = callBack =>
  onAuthStateChanged(auth, userGoogle =>
    callBack(userGoogle)
  )

