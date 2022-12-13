import { useRouter } from 'next/router'
import { IAuthFirebaseAPI } from './api'
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
    console.log('mount')

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(rules)
      return unsubscribe
    })

    function rules(): void {
      Auth.state(async (userFirebase: UserFirebase | null) => {
        await verifyAccess(userFirebase)
        await signInRule(userFirebase)
        await signOutRule(userFirebase)
      })

      async function verifyAccess(userFirebase: UserFirebase | null): Promise<void> {
        const isPrivate = isRoutePrivate(router.route)
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
        await waitAnimEnd(1000)
        if (router.pathname === '/home') await router.push(`/${userName}`)
        dispatch({ type: 'unloading' })
      }
      async function signOutRule(userFirebase: UserFirebase | null): Promise<void> {
        const alreadyVerified = user.load === false
        if (alreadyVerified || userFirebase) return
        await waitAnimEnd(1000)
        dispatch({ type: 'defineNoUser' })
      }
    }

    async function signIn(): Promise<void> {
      try {
        await Auth.signIn()
      } catch (e) {
        alert.error('Somenthing went wrong')
        if (user.load) dispatch({ type: 'unloading' })
      }
    }

    async function signOut(): Promise<void> {
      try {
        dispatch({ type: 'loading' })
        await waitAnimEnd(1000)
        await Auth.signOut()
      } catch (e) {
        alert.error('Somenthing went wrong')
        if (user.load) dispatch({ type: 'unloading' })
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
