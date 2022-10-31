import { User } from 'firebase/auth'
import React, { createContext, useContext } from 'react'

interface AuthT {
    user: null | User
    loading: boolean
}
export const AuthContext = createContext<AuthT>({ user: null, loading: false })
export const useAuth = (): AuthT => useContext(AuthContext)

interface AuthUpdT {
    signIn: () => Promise<void>
    signOut: () => Promise<void>
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
export const AuthUpdateContext = createContext<AuthUpdT>({
    signIn: async () => {},
    signOut: async () => {},
    setUser: () => null,
    setLoading: () => false
})
export const useSetAuth = (): AuthUpdT => useContext(AuthUpdateContext)

// Provider
export interface props {
    children: React.ReactNode
}
