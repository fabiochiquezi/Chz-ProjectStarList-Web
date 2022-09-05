import { User } from 'firebase/auth'
import { useSetUtils } from './UtilsContext'
import Router, { useRouter } from 'next/router'
import { authGoogle } from 'firebase/auth/google'
import { authState } from 'firebase/auth/authState'
import { signOut as goOut } from '../firebase/auth/signOut'
import React, { createContext, useContext, useState } from 'react'

// SetUp hooks
type AuthT = { user: null | User; loading: boolean }
const AuthContext = createContext<AuthT>({ user: null, loading: false })
export const useAuth = () => useContext(AuthContext)

type AuthUpdT = {
    signIn: () => Promise<void>
    signOut: () => Promise<void>
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const AuthUpdateContext = createContext<AuthUpdT>({
    signIn: async () => {},
    signOut: async () => {},
    setUser: () => null,
    setLoading: () => false
})
export const useSetAuth = () => useContext(AuthUpdateContext)

// Provider
type props = { children: React.ReactNode }

export function AuthProvider({ children }: props) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const { openAlert } = useSetUtils()
    const router = useRouter()

    authState((userFirebase: User) => {
        if (!user && userFirebase) setUser(userFirebase)
        redirectSigned(userFirebase)
    })
    function redirectSigned(userFirebase: User) {
        if (router.pathname === '/' && userFirebase)
            router.push('/catalog/doing')
    }

    async function signIn() {
        if (loading) return
        try {
            setLoading(true)
            const auth = await authGoogle()
            setUser(auth.user)
            openAlert('Login Successfully', 1)
            Router.push('/catalog/doing')
        } catch (e) {
            console.log(e)
            openAlert('Some error occurred', 2)
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
            <AuthUpdateContext.Provider
                value={{ signIn, signOut, setUser, setLoading }}
            >
                {children}
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider
