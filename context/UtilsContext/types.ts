import { createContext, useContext } from 'react'

// SetUp hooks
type UtilsT = { modal: boolean }
export const UtilsContext = createContext<UtilsT>({ modal: false })
export const useUtils = () => useContext(UtilsContext)

type SetUtilsT = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    openAlert: (message: string, state: number) => void
}
export const SetUtilsContext = createContext<SetUtilsT>({
    setModal: () => false,
    openAlert: () => {}
})
export const useSetUtils = () => useContext(SetUtilsContext)

// Provider
export type props = { children: React.ReactNode }
