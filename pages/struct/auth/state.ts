import { User } from 'core'

export interface IState {
  data: User | null | undefined,
  load: boolean
}

export interface IAction {
  type: 'loading' | 'unloading' | 'defineNoUser' | 'defineUser' | 'signingIn' | 'signingOut',
  payload?: User | null | undefined
}

export const initialState: IState = {
  data: undefined,
  load: true
}

export function reducer(state: IState, action: IAction): any {
  const payload = action.payload

  switch (action.type) {
    case 'loading':
      return { ...state, load: true }
    case 'unloading':
      return { ...state, load: false }
    case 'defineNoUser':
      return { data: null, load: false }
    case 'defineUser':
      return { data: { ...payload }, load: false }
    case 'signingIn':
      return { data: { ...payload }, load: true }
    case 'signingOut':
      return { data: null, load: true }
    default:
      throw new Error()
  }
}
