import { User } from 'firebase/auth'
import { AuthFirebase } from '../../../events'
import { useAlert as callAlert } from '../../../../libs/frontend/portals'

type IUnloading = () => void
export type ISignIn = (afterSignUpCB: (user: User) => Promise<User>) => (unloading: IUnloading) => () => Promise<void>

export const signIn: ISignIn = afterSignUpCB => unloading => async () => {
  await AuthFirebase.signIn(afterSignUpCB)()
    .catch(() => {
      callAlert().error('Somenthing went wrong')
      unloading()
    })
}

