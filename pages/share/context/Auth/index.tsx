import { User } from 'pages/share/types'
import { SignIn } from './api/signIn'
import { SignOut } from './api/signOut'
import { useRouter } from 'next/router'
import { AuthState } from './api/authState'
import { AuthContext } from './types/usetypes'
import { useUtils } from '../Utils/useContext'
import { User as UserFirebase } from 'firebase/auth'
import { publicRoutes } from '../../settings/routes'
import { getUserName } from '../../helpers/userName'
import { AuthUpdateContext } from './types/setTypes'
import { FC, ReactNode, useEffect, useState } from 'react'

function Auth(
    signInFn: SignIn,
    authStateFn: AuthState,
    signOutFn: SignOut
): FC<{ children: ReactNode }> {
    const Provider: FC<{ children: ReactNode }> = ({ children }) => {
        const router = useRouter()
        const { alert } = useUtils()
        const [loading, setLoading] = useState(false)
        const [user, setUser] = useState<User | null>(null)
        const isPublic = publicRoutes.includes(router.pathname)

        useEffect(() => {
            authStateFn((userFirebase: UserFirebase) => {
                const nullUserButHas = user === null && userFirebase
                if (nullUserButHas) defineUser(userFirebase)

                const noUserAndPrivate =
                    !isPublic && user === null && !userFirebase
                if (noUserAndPrivate) router.push('/')
            })
        }, [])

        function defineUser(userFirebase: UserFirebase): void {
            const userName = getUserName(String(userFirebase.email))
            const user = { ...userFirebase, userName }
            setUser(user)
        }

        async function signIn(): Promise<void> {
            try {
                if (loading) return
                setLoading(true)
                const userFirebase = await signInFn()
                defineUser(userFirebase)
                await router.push(`/${user?.userName}`)
            } catch (e) {
                alert.open({ message: 'Somenthing went wrong', mode: 2 })
                console.log(e, 'errorr')
            } finally {
                setLoading(false)
            }
        }

        async function signOut(): Promise<void> {
            try {
                setUser(null)
                await signOutFn()
            } catch (e) {
                alert.open({ message: 'Somenthing went wrong', mode: 2 })
                console.log(e, 'errorr')
            } finally {
                setLoading(false)
            }
        }

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
