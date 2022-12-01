import { IUseAlert } from '../portals'
import { User } from 'pages/share/types'
import { SingletonRouter } from 'next/router'
import { FC, ReactNode, useState } from 'react'
import { publicRoutes } from '../settings/routes'
import { SignIn, SignOut, AuthState } from './api'
import { ProtectRoute } from './components/Protect'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUseContext, AuthSetContext } from './index'

interface Children { children: ReactNode }
type IAuth =
  (Router: SingletonRouter) =>
    (useAlert: IUseAlert) =>
      (signIn: SignIn, authState: AuthState, signOut: SignOut) => FC<Children>

const Auth: IAuth = Router => useAlert => (signInAPI, authStateAPI, signOutAPI) =>
  function Provider({ children }: Children) {
    const alert = useAlert()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const isPublic = publicRoutes.includes(Router.route)

    function getUserName(email: string): string {
      return email?.split('@')[0]
    }

    function defineUser(userFirebase: UserFirebase): void {
      const userName = getUserName(String(userFirebase.email))
      setUser({ ...userFirebase, userName })
    }

    async function verifyPrivate(userFirebase: UserFirebase | null): Promise<void> {
      const noUserAndPrivate = !isPublic && !user && !userFirebase
      if (noUserAndPrivate) await Router.push('/home')
    }

    async function verifyUser(userFirebase: UserFirebase | null): Promise<void> {
      const nullUserButHas = !user && userFirebase
      if (nullUserButHas) defineUser(userFirebase)
    }

    authStateAPI(async (userFirebase: UserFirebase | null) => {
      await verifyUser(userFirebase)
      await verifyPrivate(userFirebase)
    })

    async function signIn(): Promise<void> {
      try {
        if (loading) return
        setLoading(true)
        const userFirebase = await signInAPI()
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
        await signOutAPI()
        setUser(null)
        await Router.push('/home')
      } catch (e) {
        alert.error('Somenthing went wrong')
      }
    }

    return (
      <AuthUseContext.Provider value={{ user }} data-testid="auth-provider">
        <AuthSetContext.Provider value={{ signIn, signOut }}>
          <ProtectRoute isPublic={isPublic} user={user}>
            {children}
          </ProtectRoute>
        </AuthSetContext.Provider>
      </AuthUseContext.Provider>
    )
  }

export { Auth }
