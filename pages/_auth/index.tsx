import { IAuthFirebaseAPI } from './api'
import { useRouter } from 'next/router'
import { useAlert } from '../share/portals'
import { getUserName } from './fns/getUserName'
import { initialState, reducer } from './state'
import { ProtectRoute } from './components/Protect'
import { auth } from 'pages/share/settings/firebase'
import { User as UserFirebase } from 'firebase/auth'
import { FC, ReactNode, useEffect, useReducer } from 'react'
import { AuthUseContext } from '../share/contexts/Auth/useAuth'
import { isRoutePrivate, paths, routes } from '../share/settings'
import { LoadingHOC } from 'pages/share/components/Loadings/LoadingHOC'

type IAuth =
  (Auth: IAuthFirebaseAPI) =>
    FC<{ children: ReactNode }>

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
        await verifyUser(userFirebase)
      })

      async function verifyAccess(userFirebase: UserFirebase | null): Promise<void> {
        const isPrivate = isRoutePrivate(router.route)
        const noUserAndPrivate = isPrivate && !userFirebase
        if (noUserAndPrivate) await router.push(paths.login)
      }

      async function verifyUser(userFirebase: UserFirebase | null): Promise<void> {
        if (user.load === false) return
        const noUserButLogged = !user.data && userFirebase
        if (noUserButLogged) {
          const userName = getUserName(String(userFirebase.email))
          const payload = { ...userFirebase, userName }
          dispatch({ type: 'defineUser', payload })
        }
        if (!userFirebase) dispatch({ type: 'defineNoUser' })
      }
    }

    async function signIn(): Promise<void> {
      try {
        const userFirebase = await Auth.signIn()
        const userName = getUserName(String(userFirebase.email))
        const payload = { ...userFirebase, userName }
        dispatch({ type: 'signingIn', payload })
        await router.push(`/${userName}`)
      } catch (e) {
        alert.error('Somenthing went wrong')
      } finally {
        dispatch({ type: 'unloading' })
      }
    }

    async function signOut(): Promise<void> {
      try {
        await Auth.signOut()
        dispatch({ type: 'loading' })
        await new Promise((resolve, reject) => { setTimeout(() => { resolve(true) }, 2000) })
        dispatch({ type: 'signingOut' })
        await router.push(routes.login)
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
