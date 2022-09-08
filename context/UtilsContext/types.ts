import { createContext, useContext } from 'react'

// SetUp hooks
type UtilsT = {
    modal: { name: string; sateModal: boolean; data: Record<string, any> }
}
export const UtilsContext = createContext<UtilsT>({
    modal: { name: '', sateModal: false, data: {} }
})
export const useUtils = () => useContext(UtilsContext)

type SetUtilsT = {
    closeModal: () => void
    openModalAlterItem: (data: Record<string, any>) => void
    openModalAddItem: () => void
    openAlert: (message: string, state: number) => void
}
export const SetUtilsContext = createContext<SetUtilsT>({
    closeModal: () => {},
    openModalAlterItem: (data: Record<string, any>) => {},
    openModalAddItem: () => {},
    openAlert: () => {}
})
export const useSetUtils = () => useContext(SetUtilsContext)

// Provider
export type props = { children: React.ReactNode }
