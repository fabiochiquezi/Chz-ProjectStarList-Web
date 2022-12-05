import { createContext, useContext } from 'react'

export interface IUseLoad { loading: boolean }
export const LoadUseContext = createContext<IUseLoad>({ loading: false })
export const useLoad = (): IUseLoad => useContext(LoadUseContext)
