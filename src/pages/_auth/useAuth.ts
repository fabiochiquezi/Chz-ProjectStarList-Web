import { User } from 'src/domain'
import { useReducer } from 'react'
import { AuthFirebase } from '../../firebase'
import { redirectToSystem, signIn, signOut } from './fns'
import { waitLoadingHOCAnim } from 'src/pages/_share/components'

export interface IState {
  data: User | null | undefined,
  load: boolean
}

export interface IAction {
  type: string,
  payload?: User | null | undefined
}

export type IUseUser = () => {
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  defineNoUser: () => Promise<void>;
  defineUser: (payload: unknown) => void;
  user: IState
}

export const useAuth: IUseUser = () => {
  // User always starts with undefined and ends up defined null or User
  const initialState: IState = { data: undefined, load: true }
  const [user, dispatch] = useReducer(reducer, initialState)
  const { getUserNameFromEmail } = AuthFirebase

  function reducer(state: IState, action: IAction): any {
    const payload = action.payload

    switch (action.type) {
      case 'loading':
        return { ...state, load: true }
      case 'unloading':
        return { ...state, load: false }
      case 'defineNoUser':
        return { data: null, load: false }
      case 'defineUser':
        return { data: { ...payload }, load: true }
      default:
        throw new Error()
    }
  }

  const unloading = (): void => user.load && dispatch({ type: 'unloading' })
  const loading = (): void => dispatch({ type: 'loading' })
  const signInFn = signIn(unloading)
  const signOutFn = signOut(loading, unloading)

  const defineNoUser = async (): Promise<void> => {
    await waitLoadingHOCAnim(1000)
    dispatch({ type: 'defineNoUser' })
  }
  const defineUser = async (userFire: any): Promise<void> => {
    loading()
    await waitLoadingHOCAnim(1000)
    const payload = { ...userFire, userName: getUserNameFromEmail(String(userFire.email)) }
    dispatch({ type: 'defineUser', payload })
    await redirectToSystem(userFire)
    unloading()
  }

  return { signIn: signInFn, signOut: signOutFn, defineNoUser, defineUser, user }
}
