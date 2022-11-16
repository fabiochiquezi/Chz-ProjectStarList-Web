import PopSave from './PopSave'
import { Alert } from './Alert'
import { Modal } from './Modal/Default'
import React, { useState } from 'react'
import { getAlertFns } from './Alert/class'
import { getModalFns } from './Modal/class'
import { getPopSaveFns } from './PopSave/class'
import { modalInitialState } from './Modal/state'
import { alertInitialState } from './Alert/state'
import { SetUtilsContext, UtilsContext } from './types'

interface props {
    children: React.ReactNode
}

const UtilsProvider: React.FC<props> = ({ children }) => {
    const [contentLoadState, setContentLoadState] = useState(true)

    const [modal, setModal] = useState(modalInitialState)
    const modalFn = getModalFns(setModal)

    const [alert, setAlert] = useState(alertInitialState)
    const alertFn = getAlertFns(setAlert)

    const [popSave, setPopSave] = useState(false)
    const popSaveFn = getPopSaveFns(setPopSave)

    return (
        <UtilsContext.Provider value={{ modal, popSave, contentLoadState }}>
            <SetUtilsContext.Provider
                value={{
                    modal: modalFn,
                    alert: alertFn,
                    popSave: popSaveFn,
                    setContentLoadState
                }}
            >
                {!alert.hide && (
                    <Alert
                        message={alert.message}
                        state={alert.state}
                        closeAlert={alertFn.close}
                    />
                )}

                <Modal isOpen={modal.sateModal}>
                    {modalFn.getModal !== undefined
                        ? modalFn.getModal(modal.name, modal.data)
                        : null}
                </Modal>

                {popSave && <PopSave />}

                {children}
            </SetUtilsContext.Provider>
        </UtilsContext.Provider>
    )
}

export { UtilsProvider }
