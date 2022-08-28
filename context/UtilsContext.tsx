import React, { createContext, useContext } from 'react'
import AddItem from '../sections/Forms/AddItem'
import Modal from '../components/Modal'
type props = { children: React.ReactNode }

// SetUp hooks
type UtilsT = { modal: boolean }
const UtilsContext = createContext<UtilsT>({ modal: false })
export const useUtils = () => useContext(UtilsContext)

type SetUtilsT = { setModal: React.Dispatch<React.SetStateAction<boolean>> }
const SetUtilsContext = createContext<SetUtilsT>({ setModal: () => false })
export const useSetUtils = () => useContext(SetUtilsContext)

// Provider
export function UtilsProvider({ children }: props) {
    const [modal, setModal] = React.useState(true)
    return (
        <UtilsContext.Provider value={{ modal }}>
            <SetUtilsContext.Provider value={{ setModal }}>
                <Modal isOpen={modal}>
                    <AddItem />
                </Modal>
                {children}
            </SetUtilsContext.Provider>
        </UtilsContext.Provider>
    )
}

export default UtilsProvider
