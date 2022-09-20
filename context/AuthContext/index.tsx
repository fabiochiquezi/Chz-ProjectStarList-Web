import { User } from 'firebase/auth'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { noAuthRequired } from 'pages/_app'
import { signInFire } from '../../firebase/auth/signIn'
import { signOutFire } from '../../firebase/auth/signOut'
import { useCatalogStore } from '../../store/catalog'
import { AuthContext, AuthUpdateContext, props } from './types'
import { authStateFirebase } from '../../firebase/auth/authState'

const AuthProvider: React.FC<props> = ({ children }) => {
    const store = useCatalogStore(state => state)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const isPublic = noAuthRequired.includes(router.pathname)

    function rules(): void {
        authStateFirebase(async (userFirebase: User) => {
            if (user == null && userFirebase) {
                setUser(userFirebase)
                return
            }
            if (!isPublic && user == null && !userFirebase) {
                await router.push('/')
            }
        })
    }
    rules()

    async function signIn(): Promise<void> {
        if (loading) return
        setLoading(true)
        const { user, ok, errors } = await signInFire()
        if (ok) {
            setUser(user)
            await router.push('/catalog/doing')
            return
        }
        console.log(errors)
        setLoading(false)
    }

    async function signOut(): Promise<void> {
        try {
            setUser(null)
            await signOutFire()
            store.resetData()
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
