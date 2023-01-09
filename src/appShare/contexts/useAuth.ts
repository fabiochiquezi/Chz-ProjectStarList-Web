import { User } from '../../appStruct/domain'
import { createContext, useContext } from 'react'

export interface IUseAuth {
  signInProcess: boolean
  user: null | User | undefined
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}
export const AuthUseContext = createContext<IUseAuth>({
  signInProcess: false,
  user: null,
  signIn: async () => { },
  signOut: async () => { }
})
export const useAuth = (): IUseAuth => useContext(AuthUseContext)

