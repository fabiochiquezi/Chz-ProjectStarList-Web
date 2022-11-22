import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'
import { PopSave } from './components/PopSave'
import { UtilsContext } from './useContext'
import { Alert } from './components/Alert'

interface DefaultState {
    message: string
    state: boolean
    mode: number
}

type SetState = Dispatch<SetStateAction<DefaultState>>

const UtilsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [alert, setAlert] = useState({
        message: '',
        state: false,
        mode: 0
    })
    const [contentLoad, setContentLoad] = useState({
        message: '',
        state: true,
        mode: 0
    })
    const [popSave, setPopSave] = useState({
        message: '',
        state: false,
        mode: 0
    })

    const toggle = (set: SetState) => () => {
        set(prev => ({ ...prev, state: !prev.state }))
    }

    const open =
        (set: SetState) => (newState?: { message?: string; mode?: number }) => {
            if (newState) set(prev => ({ ...prev, ...newState, state: true }))
            set(prev => ({ ...prev, state: true }))
        }

    const close =
        (set: SetState) =>
        (delay?: number | null): void => {
            if (delay) {
                setTimeout(() => {
                    set(prev => ({ ...prev, message: '', state: false }))
                }, delay)
                return
            }
            set(prev => ({ ...prev, message: '', state: false }))
        }

    return (
        <UtilsContext.Provider
            value={{
                contentLoad: {
                    message: contentLoad.message,
                    state: contentLoad.state,
                    open: open(setContentLoad),
                    close: close(setContentLoad),
                    toggle: toggle(setContentLoad)
                },
                popSave: {
                    message: popSave.message,
                    state: popSave.state,
                    open: open(setPopSave),
                    close: close(setPopSave),
                    toggle: toggle(setPopSave)
                },
                alert: {
                    message: alert.message,
                    state: alert.state,
                    open: open(setAlert),
                    close: close(setAlert),
                    toggle: toggle(setAlert)
                }
            }}
        >
            {alert.state && (
                <Alert
                    mode={alert.mode}
                    message={alert.message}
                    closeAlert={() =>
                        setAlert({ message: '', state: false, mode: 0 })
                    }
                />
            )}
            {popSave.state && <PopSave message={popSave.message} />}
            {children}
        </UtilsContext.Provider>
    )
}

export { UtilsProvider }
