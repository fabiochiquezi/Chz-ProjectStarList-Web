import { User } from '../types'
import { IUseAlert } from '../portals'
import { IAuthFirebaseAPI } from './api'
import { NextRouter } from 'next/router'
import { FC, ReactNode, useState } from 'react'
import { getUserName } from './fns/getUserName'
import { publicRoutes, routes } from '../settings'
import { ProtectRoute } from './components/Protect'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUseContext, AuthSetContext } from './index'

type IAuth =
  (useRouter: () => NextRouter) =>
    (useAlert: IUseAlert) =>
      (Auth: IAuthFirebaseAPI) => FC<{ children: ReactNode }>

const Auth: IAuth = useRouter => useAlert => Auth =>
  function Provider({ children }: { children: ReactNode }) {
    const alert = useAlert()
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const isPublic = publicRoutes.includes(router.route)

    Auth.state(async (userFirebase: UserFirebase | null) => {
      await verifyUser(userFirebase)
      await verifyPrivate(userFirebase)

      async function verifyPrivate(userFirebase: UserFirebase | null): Promise<void> {
        const noUserAndPrivate = !isPublic && !user && !userFirebase
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
