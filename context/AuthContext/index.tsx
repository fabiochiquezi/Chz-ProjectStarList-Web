import { User } from 'firebase/auth'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { authGoogle } from 'firebase/auth/google'
import { authState } from 'firebase/auth/authState'
import { signOut as goOut } from 'firebase/auth/signOut'
import { useSetUtils } from 'context/UtilsContext/types'
import { AuthContext, AuthUpdateContext, props } from './types'

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
        try {
            if (loading) return
            setLoading(true)
            const auth = await authGoogle()
            setUser(auth.user)
            openAlert('Login Successfully', 1)
            router.push('/catalog/doing')
        } catch (e) {
            openAlert('Sorry, something went wrong', 2)
        } finally {
            setLoading(false)
        }
    }

    async function signOut() {
        try {
            router.push('/')
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
