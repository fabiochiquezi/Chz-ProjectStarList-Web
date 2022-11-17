import { createContext, useContext } from 'react'

export interface UtilsT {
    popSave: boolean
    contentLoadState: boolean
}

export const UtilsContext = createContext<UtilsT>({
    popSave: false,
    contentLoadState: false
})

export const useUtils = (): UtilsT => useContext(UtilsContext)
