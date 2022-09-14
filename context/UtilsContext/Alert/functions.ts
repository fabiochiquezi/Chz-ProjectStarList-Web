import { alertInitialState, setAlertState } from './state'

export const openAlert =
    (setAlert: setAlertState) => (message: string, state: number) => {
        setAlert({
            message,
            state,
            hide: false
        })
    }

export const closeAlert = (setAlert: setAlertState) => () => {
    setAlert(alertInitialState)
}

export const autoCloseAlert =
    (setAlert: setAlertState) =>
    (hide: boolean, seconds: number = 7000) => {
        if (hide) setInterval(() => closeAlert(setAlert), seconds)
    }
