import { alertInitialState, setAlertState } from './state'

export const openAlert =
    (setAlert: setAlertState) =>
    (message: string, state: number, seconds: number = 5000) => {
        setAlert({
            message,
            state,
            hide: false
        })
    }

export const closeAlert = (setAlert: setAlertState) => () => {
    setAlert(alertInitialState)
}
