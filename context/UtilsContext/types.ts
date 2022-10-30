import { modalInitialState, modalState } from './Modal/state'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { alertClass } from './Alert/class'
import { modalClass } from './Modal/class'
import { popSaveClass } from './PopSave/class'

// prettier-ignore
interface UtilsT { modal: modalState, popSave: boolean, contentLoadState: boolean }
const UtilsContext = createContext<UtilsT>({
    modal: modalInitialState,
    popSave: false,
    contentLoadState: false
})
const useUtils = (): UtilsT => useContext(UtilsContext)

// prettier-ignore
interface SetUtilsT { modal: modalClass, alert: alertClass, popSave: popSaveClass, setContentLoadState: Dispatch<SetStateAction<boolean>> }
const SetUtilsContext = createContext<SetUtilsT>({
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
const useSetUtils = (): SetUtilsT => useContext(SetUtilsContext)

export { UtilsContext, useUtils, SetUtilsContext, useSetUtils }
