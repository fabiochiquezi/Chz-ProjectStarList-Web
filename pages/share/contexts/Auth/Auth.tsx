import { User } from '../../types'
import { IAuthFirebaseAPI } from './api'
import { NextRouter } from 'next/router'
import { IUseAlert } from '../../portals'
import { AuthUseContext } from './useAuth'
import { FC, ReactNode, useState } from 'react'
import { getUserName } from './fns/getUserName'
import { isRoutePrivate, paths, routes } from '../../settings'
import { ProtectRoute } from './components/Protect'
import { User as UserFirebase } from 'firebase/auth'

type IAuth =
  (useRouter: () => NextRouter) =>
    (useAlert: IUseAlert) =>
      (Auth: IAuthFirebaseAPI) => FC<{ children: ReactNode }>

const Auth: IAuth = useRouter => useAlert => Auth =>
  function Provider({ children }: { children: ReactNode }) {
    const alert = useAlert()
    const router = useRouter()
    const [user, setUser] = useState<User | null | undefined>()
    const isPrivate = isRoutePrivate(router.route)

    Auth.state(async (userFirebase: UserFirebase | null) => {
      await verifyCanAccessContent(userFirebase)
      await defineUser(userFirebase)

      async function verifyCanAccessContent(userFirebase: UserFirebase | null): Promise<void> {
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
        const userName = getUserName(String(userFirebase.email))
        await router.push(`/${userName}`)
      } catch (e) {
        alert.error('Somenthing went wrong')
      }
    }

    async function signOut(): Promise<void> {
      try {
        await Auth.signOut()
        setUser(null)
        await router.push(routes.login)
      } catch (e) {
        alert.error('Somenthing went wrong')
      }
    }

    return (
      <AuthUseContext.Provider value={{ user, signIn, signOut }} data-testid="auth-provider">
        <ProtectRoute user={user}>
          {children}
        </ProtectRoute>
      </AuthUseContext.Provider>
    )
  }

export { Auth }
