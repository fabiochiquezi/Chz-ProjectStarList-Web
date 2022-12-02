import { User } from '../../types'
import { IAuthFirebaseAPI } from './api'
import { NextRouter } from 'next/router'
import { IUseAlert } from '../../portals'
import { AuthUseContext } from './useAuth'
import { FC, ReactNode, useState } from 'react'
import { getUserName } from './fns/getUserName'
import { Loading } from 'pages/share/components'
import { isPrivate, routes } from '../../settings'
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
    const [user, setUser] = useState<User | null>(null)
    const [loadLogin, setLoadLogin] = useState(false)
    const isRoutePrivate = isPrivate(router.route)

    Auth.state(async (userFirebase: UserFirebase | null) => {
      await verifyUser(userFirebase)
      await verifyPrivate(userFirebase)

      async function verifyPrivate(userFirebase: UserFirebase | null): Promise<void> {
        const noUserAndPrivate = isRoutePrivate && !user && !userFirebase
        if (noUserAndPrivate) await router.push('/home')
      }

      async function verifyUser(userFirebase: UserFirebase | null): Promise<void> {
        const nullUserButHas = !user && userFirebase
        if (!nullUserButHas) return
        const userName = getUserName(String(userFirebase.email))
        setUser({ ...userFirebase, userName })
      }
    })

    async function signIn(): Promise<void> {
      try {
        const userFirebase = await Auth.signIn()
        setLoadLogin(true)
        const userName = getUserName(String(userFirebase.email))
        await router.push(`/${userName}`)
      } catch (e) {
        alert.error('Somenthing went wrong')
      } finally {
        setLoadLogin(false)
      }
    }

    async function signOut(): Promise<void> {
      try {
        setLoadLogin(true)
        await Auth.signOut()
        setUser(null)
        await router.push(routes.login)
      } catch (e) {
        alert.error('Somenthing went wrong')
      } finally {
        setLoadLogin(false)
      }
    }

    return (
      <AuthUseContext.Provider value={{ user, signIn, signOut }} data-testid="auth-provider">
        {loadLogin
          ? <Loading />
          : <ProtectRoute isPrivate={isRoutePrivate} user={user}>
            {children}
          </ProtectRoute>
        })
      </AuthUseContext.Provider>
    )
  }

export { Auth }
