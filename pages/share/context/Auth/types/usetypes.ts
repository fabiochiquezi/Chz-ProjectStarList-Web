import { User } from 'pages/share/types'
import { createContext, useContext } from 'react'

interface useAuthType {
    user: undefined | null | User
    loading: boolean
}

export const AuthContext = createContext<useAuthType>({
    user: null,
    loading: false
})

export const useAuth = (): useAuthType => useContext(AuthContext)
