import { User } from 'firebase/auth'
import { createContext, useContext } from 'react'

type AuthT = { user: null | User; loading: boolean }
export const AuthContext = createContext<AuthT>({ user: null, loading: false })
export const useAuth = () => useContext(AuthContext)

type AuthUpdT = {
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
export const useSetAuth = () => useContext(AuthUpdateContext)

// Provider
type props = { children: React.ReactNode }
