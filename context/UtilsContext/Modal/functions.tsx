import React from 'react'
import AddItem from '../../../sections/Forms/AddItem'
import AlterItem from '../../../sections/Forms/AlterItem'
import { modalInitialState, setModalState } from './state'

export const closeModal = (setModal: setModalState) => () => {
    setModal(modalInitialState)
}

export const openModalAlterItem =
    (setModal: setModalState) => (data: Record<string, any>) => {
        setModal({
            name: 'AlterItem',
            sateModal: true,
            data: data
        })
    }

export const openModalAddItem = (setModal: setModalState) => () => {
    setModal({
        name: 'AddItem',
        sateModal: true,
        data: {}
    })
}

export const getModal = (
    name: string,
    data: Record<string, any>
): React.ReactElement => {
    return (
        <div>
            {name === 'AlterItem' && (
                <AlterItem
                    dataItem={data as { index: number; thumb: string }}
                />
            )}
            {name === 'AddItem' && <AddItem />}
        </div>
    )
}
