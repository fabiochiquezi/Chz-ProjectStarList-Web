import { useRouter } from 'next/router'
import { useAlert } from '../../_share/portals'
import { getUserName } from './fns/getUserName'
import { initialState, reducer } from './state'
import { isPathPrivate, paths } from '../../routes'
import { ProtectRoute } from './components/Protect'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUseContext } from '../../_share/contexts'
import { FC, ReactNode, useEffect, useReducer } from 'react'

import { LoadingHOC } from '../../_share/components/Loadings/LoadingHOC'
import { waitLoadingHOCAnim } from '../../_share/components/Loadings/LoadingHOC/animation'
import { AuthFirebase } from '../../../events'


const Auth: FC<{ children: ReactNode }> = ({ children }) => {
  const alert = useAlert()
  const router = useRouter()
  const [user, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const unsubscribe = AuthFirebase.authState(async (userFirebase) => {
      await verifyAccess(userFirebase)
      await signInRule(userFirebase)
      await signOutRule(userFirebase)

      async function verifyAccess(userFirebase: UserFirebase | null): Promise<void> {
        const isPrivate = isPathPrivate(window.location.pathname)
        const noUserAndPrivate = isPrivate && !userFirebase
        if (noUserAndPrivate) await router.push(paths.login)
      }
      async function signInRule(userFirebase: UserFirebase | null): Promise<void> {
        const alreadyVerified = user.load === false
        const logged = !user.data && userFirebase
        if (alreadyVerified || !logged) return
        const userName = getUserName(String(userFirebase.email))
        const payload = { ...userFirebase, userName }
        dispatch({ type: 'signingIn', payload })
        await waitLoadingHOCAnim(1000)
        if (window.location.pathname === '/home') await router.push(`/${userName}`)
        dispatch({ type: 'unloading' })
      }
      async function signOutRule(userFirebase: UserFirebase | null): Promise<void> {
        const alreadyVerified = user.load === false
        if (alreadyVerified || userFirebase) return
        await waitLoadingHOCAnim(1000)
        dispatch({ type: 'defineNoUser' })
      }
    })

    return unsubscribe
  }, [])

  async function signIn(): Promise<void> {
    try {
      await AuthFirebase.signIn()
    } catch (e) {
      alert.error('Somenthing went wrong')
      if (user.load) dispatch({ type: 'unloading' })
    }
  }

  async function signOut(): Promise<void> {
    try {
      dispatch({ type: 'loading' })
      await waitLoadingHOCAnim(1000)
      await AuthFirebase.signOut()
    } catch (e) {
      alert.error('Somenthing went wrong')
      if (user.load) dispatch({ type: 'unloading' })
    }
  }

  return (
    <AuthUseContext.Provider value={{ user: user.data, signIn, signOut }} data-testid="AuthProvider">
      <LoadingHOC data={user.load}>
        <ProtectRoute route={router.route} user={user.data}>{children}</ProtectRoute>
      </LoadingHOC>
    </AuthUseContext.Provider >
  )
}

export { Auth }
