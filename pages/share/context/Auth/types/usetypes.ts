import { createContext, useContext } from 'react'
import { User } from 'firebase/auth'

interface useAuthType {
    user: undefined | null | User
    loading: boolean
}

export const AuthContext = createContext<useAuthType>({
    user: null,
    loading: false
})

export const useAuth = (): useAuthType => useContext(AuthContext)
