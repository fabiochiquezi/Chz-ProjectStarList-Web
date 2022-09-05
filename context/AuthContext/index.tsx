import { User } from 'firebase/auth'
import React, { useState } from 'react'
import { useSetUtils } from '../UtilsContext'
import Router, { useRouter } from 'next/router'
import { authGoogle } from 'firebase/auth/google'
import { authState } from 'firebase/auth/authState'
import { signOut as goOut } from 'firebase/auth/signOut'
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
