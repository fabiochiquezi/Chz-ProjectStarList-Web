import { AuthFirebase } from '../../../events'
import { waitLoadingHOCAnim } from '../../../../libs/frontend/HOC'
import { useAlert as callAlert } from '../../../../libs/frontend/portals'

type ILoading = () => void
type IUnloading = () => void
export type ISignOut = (loading: ILoading, unloading: IUnloading) => () => Promise<void>

export const signOut: ISignOut = (loading, unloading) => async () => {
  loading()
  await waitLoadingHOCAnim(1000)
  await AuthFirebase
    .signOut()
    .catch(() => {
      callAlert().error('Somenthing went wrong')
      unloading()
    })
}

