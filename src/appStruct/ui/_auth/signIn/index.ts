import { User } from 'firebase/auth'
import { AuthFirebase } from '../../../events'
import { useAlert as callAlert } from '../../../../libs/frontend/portals'

type IUnloading = () => void
export type ISignIn = (afterSignUpCB: (user: User) => Promise<User>) => (
  unloading: IUnloading,
  setSignInProcess: any,
) => () => Promise<void>

export const signIn: ISignIn = afterSignUpCB => (unloading, setSignInProcess) => async () => {
  setSignInProcess(true)
  await AuthFirebase
    .signIn([afterSignUpCB])()
    .catch(() => {
      callAlert().error('Somenthing went wrong', 2000)
      unloading()
    })
    .finally(() => setSignInProcess(false))
}

