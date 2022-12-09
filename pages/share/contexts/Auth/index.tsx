import { User } from '../../types'
import { IAuthFirebaseAPI } from './api'
import { NextRouter } from 'next/router'
import { IUseAlert } from '../../portals'
import { AuthUseContext } from './useAuth'
import { FC, ReactNode, useState } from 'react'
import { getUserName } from './fns/getUserName'
import { Loading } from 'pages/share/components'
import { ProtectRoute } from './components/Protect'
import { User as UserFirebase } from 'firebase/auth'
import { isRoutePrivate, paths, routes } from '../../settings'

type IAuth =
  (Auth: IAuthFirebaseAPI) =>
    (useRouter: () => NextRouter) =>
      (useAlert: IUseAlert) =>
        FC<{ children: ReactNode }>

const Auth: IAuth = Auth => useRouter => useAlert =>
  function Provider({ children }: { children: ReactNode }) {
    const alert = useAlert()
    const router = useRouter()
    const [user, setUser] = useState<User | null | undefined>()
    const [transition, setTransition] = useState(false)

    Auth.state(async (userFirebase: UserFirebase | null) => {
      await verifyCanAccessContent(userFirebase)
      await defineUser(userFirebase)

      async function verifyCanAccessContent(userFirebase: UserFirebase | null): Promise<void> {
        const isPrivate = isRoutePrivate(router.route)
        const noUserAndPrivate = isPrivate && !userFirebase
        if (noUserAndPrivate) await router.push(paths.login)
      }

      async function defineUser(userFirebase: UserFirebase | null): Promise<void> {
        const noUserButLogged = !user && userFirebase
        if (noUserButLogged) {
          const userName = getUserName(String(userFirebase.email))
          setUser({ ...userFirebase, userName })
        }
        if (!userFirebase) setUser(null)
      }
    })

    async function signIn(): Promise<void> {
      try {
        const userFirebase = await Auth.signIn()
        setTransition(true)
        const userName = getUserName(String(userFirebase.email))
        setTransition(false)
        await router.push(`/${userName}`)
      } catch (e) {
        alert.error('Somenthing went wrong')
      }
    }

    async function signOut(): Promise<void> {
      try {
        setTransition(true)
        await Auth.signOut()
        setUser(null)
        setTransition(false)
        await router.push(routes.login)
      } catch (e) {
        alert.error('Somenthing went wrong')
      }
    }

    return (
      <AuthUseContext.Provider value={{ user, signIn, signOut }} data-testid="AuthProvider">
        {transition && <Loading />}
        {!transition && <ProtectRoute route={router.route} user={user}>{children}</ProtectRoute>}
      </AuthUseContext.Provider>
    )
  }

export { Auth }
