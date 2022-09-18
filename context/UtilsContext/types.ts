import { modalInitialState, modalState } from './Modal/state'
import { createContext, useContext } from 'react'
import { alertClass } from './Alert/class'
import { modalClass } from './Modal/class'
import { popSaveClass } from './PopSave/class'

// prettier-ignore
interface UtilsT { modal: modalState, popSave: boolean }
const UtilsContext = createContext<UtilsT>({
    modal: modalInitialState,
    popSave: false
})
const useUtils = (): UtilsT => useContext(UtilsContext)

// prettier-ignore
interface SetUtilsT { modal: modalClass, alert: alertClass, popSave: popSaveClass }
const SetUtilsContext = createContext<SetUtilsT>({
    modal: {
        close: () => {},
        openAlterItem: (data: Record<string, any>) => {},
        openDeleteItem: (data: Record<string, any>) => {},
        openAddItem: () => {}
    },
    alert: {
        open: () => {},
        close: () => {},
        autoClose: () => {}
    },
    popSave: {
        open: () => {},
        close: () => {}
    }
})
const useSetUtils = (): SetUtilsT => useContext(SetUtilsContext)

export { UtilsContext, useUtils, SetUtilsContext, useSetUtils }
