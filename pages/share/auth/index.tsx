import { SignIn } from './api/signIn'
import { SignOut } from './api/signOut'
import { Loading } from '../components'
import { NextRouter } from 'next/router'
import { User } from 'pages/share/types'
import { AuthState } from './api/authState'
import { getUserName } from './fns/userName'
import { AuthContext } from './types/usetypes'
import { publicRoutes } from '../settings/routes'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUpdateContext } from './types/setTypes'
import { FC, ReactNode, useEffect, useState } from 'react'
import { UseAlertType } from '../store/components/Alert'

type TAuth = (
    signIn: SignIn,
    authState: AuthState,
    signOut: SignOut
) => FC<IProvider>

interface IProvider {
    children: ReactNode
    alert: UseAlertType
    router: NextRouter
}

const Auth: TAuth = (signInFn, authStateFn, signOutFn) => {
    const Provider: FC<IProvider> = ({ children, alert, router }) => {
        const [loading, setLoading] = useState(false)
        const [user, setUser] = useState<User | null>(null)

        const publicRoute = children
        const privateRoute = !user ? <Loading /> : children
        const isPublic = publicRoutes.includes(router.route)

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

        authStateFn(async (userFirebase: UserFirebase | null) => {
            await verifyUser(userFirebase)
            await verifyPrivate(userFirebase)
        })

        return (
            <AuthContext.Provider
                value={{ user, loading }}
                data-testid="auth-provider"
            >
                <AuthUpdateContext.Provider
                    value={{ signIn, signOut, setUser, setLoading }}
                >
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
