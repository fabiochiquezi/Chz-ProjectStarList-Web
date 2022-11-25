import { useAlert } from '../store'
import { SignIn } from './api/signIn'
import { SignOut } from './api/signOut'
import { useRouter } from 'next/router'
import { User } from 'pages/share/types'
import { AuthState } from './api/authState'
import { getUserName } from './fns/userName'
import { AuthContext } from './types/usetypes'
import { publicRoutes } from '../settings/routes'
import { User as UserFirebase } from 'firebase/auth'
import { AuthUpdateContext } from './types/setTypes'
import { FC, ReactNode, useEffect, useState } from 'react'

const Auth = (
    signInFn: SignIn,
    authStateFn: AuthState,
    signOutFn: SignOut
): FC<{ children: ReactNode }> => {
    const Provider: FC<{ children: ReactNode }> = ({ children }) => {
        const alert = useAlert()
        const router = useRouter()
        const [loading, setLoading] = useState(false)
        const [user, setUser] = useState<User | null>(null)

        function defineUser(userFirebase: UserFirebase): void {
            const userName = getUserName(String(userFirebase.email))
            setUser({ ...userFirebase, userName })
        }

        async function verifyPrivate(
            userFirebase: UserFirebase | null
        ): Promise<void> {
            const isPublic = publicRoutes.includes(router.pathname)
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

        useEffect(() => {
            authStateFn(async (userFirebase: UserFirebase | null) => {
                await verifyUser(userFirebase)
                await verifyPrivate(userFirebase)
            })
        }, [])

        return (
            <AuthContext.Provider
                value={{ user, loading }}
                data-testid="auth-provider"
            >
                <AuthUpdateContext.Provider
                    value={{ signIn, signOut, setUser, setLoading }}
                >
                    {children}
                </AuthUpdateContext.Provider>
            </AuthContext.Provider>
        )
    }

    return Provider
}

export { Auth }
