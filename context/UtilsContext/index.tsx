import { getAlertFns } from './Alert/class'
import { getModalFns } from './Modal/class'
import { modalInitialState } from './Modal/state'
import { alertInitialState } from './Alert/state'
import React, { useEffect, useState } from 'react'
import { Modal } from '../../components/Modals/Default'
import { Alert } from '../../components/Alerts/Default'
import { SetUtilsContext, UtilsContext } from './types'

interface props {
    children: React.ReactNode
}

const UtilsProvider: React.FC<props> = ({ children }) => {
    const [modal, setModal] = useState(modalInitialState)
    const modalFn = getModalFns(setModal)

    const [alert, setAlert] = useState(alertInitialState)
    const alertFn = getAlertFns(setAlert)

    useEffect(() => {
        alertFn.autoClose(alert.hide, 7000)
    }, [alert.hide])

    return (
        <UtilsContext.Provider value={{ modal }}>
            <SetUtilsContext.Provider
                value={{
                    modal: modalFn,
                    alert: alertFn
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

                {children}
            </SetUtilsContext.Provider>
        </UtilsContext.Provider>
    )
}

export default UtilsProvider
