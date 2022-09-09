import { props, SetUtilsContext, UtilsContext } from './types'
import React, { useEffect, useState } from 'react'
import AddItem from 'sections/Forms/AddItem'
import Modal from 'components/Modals/Modal'
import Alert from 'components/Alerts/Alert'
import AlterItem from 'sections/Forms/AlterItem'

export function UtilsProvider({ children }: props) {
    // Modal
    const [modal, setModal] = useState({
        name: '',
        sateModal: false,
        data: {}
    })

    function closeModal() {
        setModal({
            name: '',
            sateModal: false,
            data: {}
        })
    }
    function openModalAlterItem(data: Record<string, any>) {
        setModal({
            name: 'AlterItem',
            sateModal: true,
            data: data
        })
    }
    function openModalAddItem() {
        setModal({
            name: 'AddItem',
            sateModal: true,
            data: {}
        })
    }

    // Allert
    const [alert, setAlert] = useState({
        message: '',
        state: 0,
        hide: true
    })

    useEffect(() => {
        if (alert.hide) setInterval(() => closeAlert(), 7000)
    }, [alert.hide])

    function openAlert(message: string, state: number) {
        setAlert({
            message,
            state,
            hide: false
        })
    }
    function closeAlert() {
        setAlert({
            message: '',
            state: 0,
            hide: true
        })
    }

    return (
        <UtilsContext.Provider value={{ modal }}>
            <SetUtilsContext.Provider
                value={{
                    closeModal,
                    openModalAlterItem,
                    openModalAddItem,
                    openAlert
                }}
            >
                {!alert.hide && (
                    <Alert
                        message={alert.message}
                        state={alert.state}
                        closeAlert={closeAlert}
                    />
                )}
                <Modal isOpen={modal.sateModal}>
                    {modal.name === 'AlterItem' && (
                        <AlterItem
                            dataItem={
                                modal.data as { index: number; thumb: string }
                            }
                        />
                    )}
                    {modal.name === 'AddItem' && <AddItem />}
                </Modal>
                {children}
            </SetUtilsContext.Provider>
        </UtilsContext.Provider>
    )
}

export default UtilsProvider
