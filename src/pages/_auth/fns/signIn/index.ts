import { AuthFirebase } from 'src/firebase'
import { useAlert as callAlert } from 'src/pages/_share/portals'

type IUnloading = () => void
export type ISignIn = (unloading: IUnloading) => () => Promise<void>

export const signIn: ISignIn = unloading => async () => await AuthFirebase.signIn()
  .catch(() => {
    callAlert().error('Somenthing went wrong')
    unloading()
  })

