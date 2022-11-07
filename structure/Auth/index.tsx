import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { publicRoutes } from 'general/routes'
import { FC, useEffect, useState } from 'react'
import { useCatalogStore } from '../../store/catalog'
import { authState } from '../../firebase/auth/authState'
import { AuthContext, AuthUpdateContext, props } from './types'
import { signIn as signInFirebase } from '../../firebase/auth/signIn'
import { signOut as signOutFirebase } from '../../firebase/auth/signOut'
import { getUserName } from 'helpers/userName'

const AuthProvider: FC<props> = ({ children }) => {
    const store = useCatalogStore(state => state)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const isPublic = publicRoutes.includes(router.pathname)

    useEffect(() => {
        authState(async (userFirebase: User) => {
            const nullUserButHas = user === null && userFirebase
            if (nullUserButHas) setUser(userFirebase)

            const noUserAndPrivate = !isPublic && user === null && !userFirebase
            if (noUserAndPrivate) await router.push('/')
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
            store.resetData()
        } catch (e) {
            alert('Something went wrong')
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
