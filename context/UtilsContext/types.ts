import { modalInitialState, modalState } from './Modal/state'
import { createContext, useContext } from 'react'
import { alertClass } from './Alert/class'
import { modalClass } from './Modal/class'

// prettier-ignore
interface UtilsT { modal: modalState }
const UtilsContext = createContext<UtilsT>({ modal: modalInitialState })
const useUtils = (): UtilsT => useContext(UtilsContext)

// prettier-ignore
interface SetUtilsT { modal: modalClass, alert: alertClass }
const SetUtilsContext = createContext<SetUtilsT>({
    modal: {
        close: () => {},
        openAlterItem: (data: Record<string, any>) => {},
        openAddItem: () => {}
    },
    alert: {
        open: () => {},
        close: () => {},
        autoClose: () => {}
    }
})
const useSetUtils = (): SetUtilsT => useContext(SetUtilsContext)

export { UtilsContext, useUtils, SetUtilsContext, useSetUtils }
