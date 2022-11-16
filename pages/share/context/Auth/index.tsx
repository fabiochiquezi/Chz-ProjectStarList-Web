import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { authState } from './api/authState'
import { AuthContext } from './types/usetypes'
import { AuthUpdateContext } from './types/setTypes'
import { publicRoutes } from '../../settings/routes'
import { getUserName } from '../../helpers/userName'
import { signIn as signInFirebase } from './api/signIn'
import { signOut as signOutFirebase } from './api/signOut'
import { FC, ReactNode, useEffect, useState } from 'react'

interface AuthType {
    children: ReactNode
}

const AuthProvider: FC<AuthType> = ({ children }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const isPublic = publicRoutes.includes(router.pathname)

    useEffect(() => {
        authState((userFirebase: User) => {
            const nullUserButHas = user === null && userFirebase
            if (nullUserButHas) setUser(userFirebase)

            const noUserAndPrivate = !isPublic && user === null && !userFirebase
            if (noUserAndPrivate) router.push('/')
        })
    }, [])

    async function signIn(): Promise<void> {
        try {
            if (loading) return
            setLoading(true)
            const user = await signInFirebase()
            setUser(user)
            await router.push(`/${getUserName(user.email as string)}`)
        } catch (e) {
            alert('Something went wrong')
            console.log(e, 'error')
        } finally {
            setLoading(false)
        }
    }

    async function signOut(): Promise<void> {
        try {
            setUser(null)
            await signOutFirebase()
        } catch (e) {
            alert('Something went wrong')
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

export { AuthProvider }
