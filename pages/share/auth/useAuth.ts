import { User } from 'pages/share/types'
import { createContext, useContext } from 'react'

interface useAuthType {
  user: null | User
}

export const AuthUseContext = createContext<useAuthType>({
  user: null
})

export const useAuth = (): useAuthType => useContext(AuthUseContext)
