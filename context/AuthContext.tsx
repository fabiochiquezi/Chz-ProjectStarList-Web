import { User } from 'firebase/auth'
import Router from 'next/router'
import React, { createContext, useContext, useState } from 'react'
import { authGoogle } from '../firebase/auth/google'
import { signOut as goOut } from '../firebase/auth/signOut'
type props = { children: React.ReactNode }

// SetUp hooks
type AuthT = { user: null | User; loading: boolean }
const AuthContext = createContext<AuthT>({ user: null, loading: false })
export const useAuth = () => useContext(AuthContext)

type AuthUpdT = { signIn: () => Promise<void>; signOut: () => Promise<void> }
const AuthUpdateContext = createContext<AuthUpdT>({
    signIn: async () => {},
    signOut: async () => {}
})
export const useSetAuth = () => useContext(AuthUpdateContext)

// Provider
export function AuthProvider({ children }: props) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)

    async function signIn() {
        if (loading) return
        try {
            setLoading(true)
            const auth = await authGoogle()
            setUser(auth.user)
            Router.push('/catalogs/movies')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    async function signOut() {
        try {
            Router.push('/')
            await goOut()
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading }}>
            <AuthUpdateContext.Provider value={{ signIn, signOut }}>
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider
