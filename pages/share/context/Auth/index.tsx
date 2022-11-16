import { User } from 'firebase/auth'
import { SignIn } from './api/signIn'
import { SignOut } from './api/signOut'
import { useRouter } from 'next/router'
import { AuthState } from './api/authState'
import { AuthContext } from './types/usetypes'
import { publicRoutes } from '../../settings/routes'
import { getUserName } from '../../helpers/userName'
import { AuthUpdateContext } from './types/setTypes'
import { FC, ReactNode, useEffect, useState } from 'react'

interface Children {
    children: ReactNode
}
function Auth(
    signInFn: SignIn,
    authStateFn: AuthState,
    signOutFn: SignOut
): FC<Children> {
    const Provider: FC<Children> = ({ children }) => {
        const router = useRouter()
        const [loading, setLoading] = useState(false)
        const [user, setUser] = useState<User | null>(null)
        const isPublic = publicRoutes.includes(router.pathname)

        useEffect(() => {
            authStateFn((userFirebase: User) => {
                const nullUserButHas = user === null && userFirebase
                if (nullUserButHas) setUser(userFirebase)

                const noUserAndPrivate =
                    !isPublic && user === null && !userFirebase
                if (noUserAndPrivate) router.push('/')
            })
        }, [])

        async function signIn(): Promise<void> {
            try {
                if (loading) return
                setLoading(true)
                const user = await signInFn()
                setUser(user)
                await router.push(`/${getUserName(user.email as string)}`)
            } catch (e) {
                window.alert('Something went wrong')
                console.log(e, 'error')
            } finally {
                setLoading(false)
            }
        }

        async function signOut(): Promise<void> {
            try {
                setUser(null)
                await signOutFn()
            } catch (e) {
                window.alert('Something went wrong')
                console.log(e, 'error')
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
