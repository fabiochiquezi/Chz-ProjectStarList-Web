import { User } from 'firebase/auth'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { db } from 'firebase/firebaseSettings'
import { doc, setDoc } from 'firebase/firestore'
import { authGoogle } from 'firebase/auth/google'
import { getFireDoc } from 'firebase/firestore/get'
import { authState } from 'firebase/auth/authState'
import { useCatalogStore } from 'store/catalogStore'
import { signOut as goOut } from 'firebase/auth/signOut'
import { AuthContext, AuthUpdateContext, props } from './types'
import { noAuthRequired } from 'data/routes'

export function AuthProvider({ children }: props) {
    const store = useCatalogStore(state => state)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const isPublic = noAuthRequired.includes(router.pathname)

    authState((userFirebase: User) => {
        if (user == null && userFirebase) {
            setUser(userFirebase)
            return
        }
        if (!isPublic && user == null && !userFirebase) {
            router.push('/')
        }
    })

    async function signIn() {
        try {
            if (loading) return
            setLoading(true)

            const auth = await authGoogle()
            const { displayName, email, uid } = auth.user

            const getUser = await getFireDoc('users', uid)
            if (getUser == null) {
                await setDoc(doc(db, 'users', uid), { displayName, email })
                await setDoc(doc(db, 'doing', uid), { list: [] })
                await setDoc(doc(db, 'illdo', uid), { list: [] })
                await setDoc(doc(db, 'did', uid), { list: [] })
            }
            setUser(auth.user)
            router.push('/catalog/doing')
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    async function signOut() {
        try {
            setUser(null)
            await goOut()
            store.resetData()
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
