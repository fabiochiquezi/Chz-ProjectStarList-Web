import { waitLoadingHOCAnim } from '../../../../libs/frontend/HOC'
import { redirectToSystem } from './redirectToSystem'
import { AuthFirebase } from '../../../events'
import { User } from '../../../domain'
import { useReducer } from 'react'

interface IState { data: User | null | undefined, load: boolean }
interface IAction { type: string, payload?: User | null | undefined }
type IUseUser = () => {
  loading: () => void
  unloading: () => void
  defineNoUser: () => Promise<void>;
  defineUser: (payload: unknown) => void;
  user: IState
}

export const useReducerAuth: IUseUser = () => {
  // User always starts with undefined and ends up defined null or User
  const initialState: IState = { data: undefined, load: true }
  const [user, dispatch] = useReducer(reducer, initialState)
  const { getUserNameFromEmail } = AuthFirebase
  const getUserName = (userFire: any): string => getUserNameFromEmail(String(userFire.email))

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

  const defineNoUser = async (): Promise<void> => {
    await waitLoadingHOCAnim(1000)
    dispatch({ type: 'defineNoUser' })
  }
  const defineUser = async (userFire: any): Promise<void> => {
    loading()
    await waitLoadingHOCAnim(1000)
    const payload = { ...userFire, userName: getUserName(userFire) }
    dispatch({ type: 'defineUser', payload })
    await redirectToSystem(userFire)
    unloading()
  }

  return { unloading, loading, defineNoUser, defineUser, user }
}
