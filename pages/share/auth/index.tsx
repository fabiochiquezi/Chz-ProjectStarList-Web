import { SignIn } from './api/signIn'
import { SignOut } from './api/signOut'
import { Loading } from '../components'
import { NextRouter } from 'next/router'
import { User } from 'pages/share/types'
import { AuthState } from './api/authState'
import { AuthContext } from './types/usetypes'
import { FC, ReactNode, useState } from 'react'
import { publicRoutes } from '../settings/routes'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUpdateContext } from './types/setTypes'
import { IUsePortalAlert } from '../portals/Alerts/Default'

type IAuth = (
  signIn: SignIn,
  authState: AuthState,
  signOut: SignOut
) => FC<IProviderProps>

interface IProviderProps {
  alert: IUsePortalAlert
  router: NextRouter
  children: ReactNode
}

const Auth: IAuth = (signInFn, authStateFn, signOutFn) => {
  const Provider: FC<IProviderProps> = ({ children, alert, router }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    const publicRoute = children
    const privateRoute = !user ? <Loading /> : children
    const isPublic = publicRoutes.includes(router.route)

    const getUserName = (email: string): string => email?.split('@')[0]

    function defineUser(userFirebase: UserFirebase): void {
      const userName = getUserName(String(userFirebase.email))
      setUser({ ...userFirebase, userName })
    }

    async function verifyPrivate(
      userFirebase: UserFirebase | null
    ): Promise<void> {
      const noUserAndPrivate = !isPublic && !user && !userFirebase
      if (noUserAndPrivate) await router.push('/home')
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
        await router.push(`/${userName}`)
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
        await router.push('/home')
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
  return Provider
}

export { Auth }
