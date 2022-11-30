import { SignIn } from './api/signIn'
import { SignOut } from './api/signOut'
import { Loading } from '../components'
import { User } from 'pages/share/types'
import { AuthState } from './api/authState'
import { SingletonRouter } from 'next/router'
import { AuthContext } from './types/usetypes'
import { FC, ReactNode, useState } from 'react'
import { publicRoutes } from '../settings/routes'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUpdateContext } from './types/setTypes'
import { IUsePortalAlert } from '../portals/Alerts/Default'

type IAuth =
  (useAlert: IUsePortalAlert, Router: SingletonRouter) =>
    (signIn: SignIn, authState: AuthState, signOut: SignOut) =>
      FC<{ children: ReactNode }>

const Auth: IAuth = (useAlert, Router) =>
  (signInFn, authStateFn, signOutFn) =>
    function Provider({ children }: { children: ReactNode }) {
      const alert = useAlert()
      const [loading, setLoading] = useState(false)
      const [user, setUser] = useState<User | null>(null)

      const publicRoute = children
      const privateRoute = !user ? <Loading /> : children

      const getUserName = (email: string): string => email?.split('@')[0]

      function defineUser(userFirebase: UserFirebase): void {
        const userName = getUserName(String(userFirebase.email))
        setUser({ ...userFirebase, userName })
      }

      async function verifyPrivate(
        userFirebase: UserFirebase | null
      ): Promise<void> {
        const isPublic = publicRoutes.includes(Router.route)
        const noUserAndPrivate = !isPublic && !user && !userFirebase
        if (noUserAndPrivate) await Router.push('/home')
      }

      async function verifyUser(
        userFirebase: UserFirebase | null
      ): Promise<void> {
        const nullUserButHas = !user && userFirebase
        if (nullUserButHas) defineUser(userFirebase)
      }

      authStateFn(async (userFirebase: UserFirebase | null) => {
        await verifyUser(userFirebase)
        await verifyPrivate(userFirebase)
      })

      async function signIn(): Promise<void> {
        try {
          if (loading) return
          setLoading(true)
          const userFirebase = await signInFn()
          const userName = getUserName(String(userFirebase.email))
          await Router.push(`/${userName}`)
        } catch (e) {
          alert.error('Somenthing went wrong')
        } finally {
          setLoading(false)
        }
      }

      async function signOut(): Promise<void> {
        try {
          await signOutFn()
          setUser(null)
          await Router.push('/home')
        } catch (e) {
          alert.error('Somenthing went wrong')
        }
      }

      return (
        <AuthContext.Provider value={{ user }} data-testid="auth-provider">
          <AuthUpdateContext.Provider value={{ signIn, signOut }}>
            {/* TODO */}
            {/* {isPublic ? publicRoute : privateRoute} */}
            {children}
          </AuthUpdateContext.Provider>
        </AuthContext.Provider>
      )
    }

export { Auth }
