import { modalInitialState, modalState } from './Modal/state'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { alertClass } from './Alert/class'
import { modalClass } from './Modal/class'
import { popSaveClass } from './PopSave/class'

// useutils
export interface UtilsT {
    modal: modalState
    popSave: boolean
    contentLoadState: boolean
}

export const UtilsContext = createContext<UtilsT>({
    modal: modalInitialState,
    popSave: false,
    contentLoadState: false
})

export const useUtils = (): UtilsT => useContext(UtilsContext)

// useSetUtils
export interface SetUtilsT {
    modal: modalClass
    alert: alertClass
    popSave: popSaveClass
    setContentLoadState: Dispatch<SetStateAction<boolean>>
}

export const SetUtilsContext = createContext<SetUtilsT>({
    modal: {
        close: () => {},
        openAlterItem: (data: Record<string, any>) => {},
        openDeleteItem: (data: Record<string, any>) => {},
        openAddItem: () => {}
    },
    alert: {
        open: () => {},
        close: () => {}
    },
    popSave: {
        open: () => {},
        close: () => {}
    },
    setContentLoadState: () => false
})

export const useSetUtils = (): SetUtilsT => useContext(SetUtilsContext)
