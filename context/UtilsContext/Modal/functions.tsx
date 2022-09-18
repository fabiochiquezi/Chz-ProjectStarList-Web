import React from 'react'
import { DeleteItem } from '../../../sections/Forms/DeleteItem'
import { AddItem } from '../../../sections/Forms/Add'
import { setCatalogList } from '../../../firebase/catalog/setList'
import { AlterItem } from '../../../sections/Forms/AlterItem'
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

export const openModalDeleteItem =
    (setModal: setModalState) => (data: Record<string, any>) => {
        setModal({
            name: 'DeleteItem',
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
                    setCatalogList={setCatalogList}
                />
            )}
            {name === 'AddItem' && <AddItem setCatalogList={setCatalogList} />}
            {name === 'DeleteItem' && (
                <DeleteItem
                    dataItem={data as { index: number; thumb: string }}
                    setCatalogList={setCatalogList}
                />
            )}
        </div>
    )
}
