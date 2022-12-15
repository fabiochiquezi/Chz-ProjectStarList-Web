import { User } from 'pages/share/types'
import { createContext, useContext } from 'react'

export interface IUseAuth {
  user: null | User | undefined
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}
export const AuthUseContext = createContext<IUseAuth>({
  user: null,
  signIn: async () => { },
  signOut: async () => { }
})
export const useAuth = (): IUseAuth => useContext(AuthUseContext)

