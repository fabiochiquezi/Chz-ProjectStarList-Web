import { createContext, useContext } from 'react'

export interface IUseLoad {
  loading: boolean
  load: (callBack: any) => Promise<void> | void
}
export const LoadUseContext = createContext<IUseLoad>({
  loading: false,
  load: (callBack: any) => { }
})
export const useLoad = (): IUseLoad => useContext(LoadUseContext)
