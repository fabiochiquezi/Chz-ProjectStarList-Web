import { User } from 'pages/share/types'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export type SignInFn = () => Promise<void>
export type signOutFn = () => Promise<void>
export type setUserFn = Dispatch<SetStateAction<User | null>>
export type setLoadingFn = Dispatch<SetStateAction<boolean>>

export interface SetAuthType {
    signIn: SignInFn
    signOut: signOutFn
    setUser: setUserFn
    setLoading: setLoadingFn
}

export const AuthUpdateContext = createContext<SetAuthType>({
    signIn: async () => {},
    signOut: async () => {},
    setUser: () => null,
    setLoading: () => false
})

export const useSetAuth = (): SetAuthType => useContext(AuthUpdateContext)
