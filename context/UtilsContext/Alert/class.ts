import { autoCloseAlert, closeAlert, openAlert } from './functions'
import { setAlertState } from './state'

export interface alertClass {
    close: () => void
    open: (message: string, state: number) => void
    autoClose: (hide: boolean, seconds?: number) => void
}

export const getAlertFns = (setAlert: setAlertState): alertClass => ({
    close: closeAlert(setAlert),
    open: openAlert(setAlert),
    autoClose: autoCloseAlert(setAlert)
})
