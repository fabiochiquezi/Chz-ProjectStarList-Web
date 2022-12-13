import { IAuthFirebaseAPI } from './api'
import { useRouter } from 'next/router'
import { useAlert } from '../share/portals'
import { getUserName } from './fns/getUserName'
import { initialState, reducer } from './state'
import { ProtectRoute } from './components/Protect'
import { auth } from 'pages/share/settings/firebase'
import { User as UserFirebase } from 'firebase/auth'
import { isRoutePrivate, paths } from '../share/settings'
import { FC, ReactNode, useEffect, useReducer } from 'react'
import { AuthUseContext } from '../share/contexts/Auth/useAuth'
import { waitAnimEnd } from 'pages/share/settings/general/animation'
import { LoadingHOC } from 'pages/share/components/Loadings/LoadingHOC'

type IAuth = (Auth: IAuthFirebaseAPI) => FC<{ children: ReactNode }>

const Auth: IAuth = Auth =>
  function Provider({ children }: { children: ReactNode }) {
    const alert = useAlert()
    const router = useRouter()
    const [user, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(authStateChanged)
      return unsubscribe
    })

    function authStateChanged(): void {
      Auth.state(async (userFirebase: UserFirebase | null) => {
        await verifyAccess(userFirebase)
        await verifyAlreadyLogged(userFirebase)
        await verifyUser(userFirebase)
      })

      async function verifyAccess(userFirebase: UserFirebase | null): Promise<void> {
        const isPrivate = isRoutePrivate(router.route)
        const noUserAndPrivate = isPrivate && !userFirebase
        if (noUserAndPrivate) await router.push(paths.login)
      }
      async function verifyAlreadyLogged(userFirebase: UserFirebase | null): Promise<void> {
        const alreadyVerified = user.load === false
        const logged = !user.data && userFirebase
        if (alreadyVerified || !logged) return
        const userName = getUserName(String(userFirebase.email))
        const payload = { ...userFirebase, userName }
        dispatch({ type: 'defineUser', payload })
      }
      async function verifyUser(userFirebase: UserFirebase | null): Promise<void> {
        const alreadyVerified = user.load === false
        if (alreadyVerified || userFirebase) return
        dispatch({ type: 'defineNoUser' })
      }
    }

    async function signIn(): Promise<void> {
      try {
        const userFirebase = await Auth.signIn()
        const userName = getUserName(String(userFirebase.email))
        const payload = { ...userFirebase, userName }
        dispatch({ type: 'signingIn', payload })
        waitAnimEnd()
        await router.push(`/${userName}`)
      } catch (e) {
        alert.error('Somenthing went wrong')
      } finally {
        dispatch({ type: 'unloading' })
      }
    }

    async function signOut(): Promise<void> {
      try {
        dispatch({ type: 'loading' })
        waitAnimEnd()
        await Auth.signOut()
      } catch (e) {
        alert.error('Somenthing went wrong')
      } finally {
        dispatch({ type: 'unloading' })
      }
    }

    return (
      <AuthUseContext.Provider value={{ user: user.data, signIn, signOut }} data-testid="AuthProvider">
        <LoadingHOC data={user.load}>
          <ProtectRoute route={router.route} user={user}>{children}</ProtectRoute>
        </LoadingHOC>
      </AuthUseContext.Provider >
    )
  }

export { Auth }
