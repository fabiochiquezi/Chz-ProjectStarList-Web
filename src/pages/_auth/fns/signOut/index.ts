import { AuthFirebase } from 'src/firebase'
import { waitLoadingHOCAnim } from 'src/pages/_share/components'
import { useAlert as callAlert } from 'src/pages/_share/portals'

type ILoading = () => void
type IUnloading = () => void
export type ISignOut = (loading: ILoading, unloading: IUnloading) => () => Promise<void>

export const signOut: ISignOut = (loading, unloading) => async () => {
  loading()
  await waitLoadingHOCAnim(1000)
  await AuthFirebase.signOut()
    .catch(() => {
      callAlert().error('Somenthing went wrong')
      unloading()
    })
}

