import { createContext, useContext } from 'react'

export interface SetAuthType {
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthSetContext = createContext<SetAuthType>({
  signIn: async () => { },
  signOut: async () => { }
})

export const useSetAuth = (): SetAuthType => useContext(AuthSetContext)
