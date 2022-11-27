import { createContext, useContext } from 'react'

export type SignInFn = () => Promise<void>
export type signOutFn = () => Promise<void>

export interface SetAuthType {
  signIn: SignInFn
  signOut: signOutFn
}

export const AuthUpdateContext = createContext<SetAuthType>({
  signIn: async () => {},
  signOut: async () => {}
})

export const useSetAuth = (): SetAuthType => useContext(AuthUpdateContext)
