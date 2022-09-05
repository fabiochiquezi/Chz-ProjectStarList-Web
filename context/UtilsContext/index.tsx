import React, { useEffect, useState } from 'react'
import AddItem from 'sections/Forms/AddItem'
import Modal from 'components/Modal'
import Alert from 'components/Alert'
import { props, SetUtilsContext, UtilsContext } from './types'

export function UtilsProvider({ children }: props) {
    const [modal, setModal] = useState(false)
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
            <SetUtilsContext.Provider value={{ setModal, openAlert }}>
                {!alert.hide && (
                    <Alert
                        message={alert.message}
                        state={alert.state}
                        closeAlert={closeAlert}
                    />
                )}
                <Modal isOpen={modal}>
                    <AddItem />
                </Modal>
                {children}
            </SetUtilsContext.Provider>
        </UtilsContext.Provider>
    )
}

export default UtilsProvider
