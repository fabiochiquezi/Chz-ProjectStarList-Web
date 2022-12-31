import { AuthFirebase } from '../../../../events'
import { useAlert as callAlert } from '../../../../../libs/frontend/portals'

type IUnloading = () => void
export type ISignIn = (unloading: IUnloading) => () => Promise<void>

export const signIn: ISignIn = unloading => async () => await AuthFirebase.signIn()
  .catch(() => {
    callAlert().error('Somenthing went wrong')
    unloading()
  })

