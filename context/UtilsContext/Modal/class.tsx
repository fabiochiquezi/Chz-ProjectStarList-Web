import React from 'react'
import { setModalState } from './state'
import {
    closeModal,
    openModalAddItem,
    openModalAlterItem,
    getModal
} from './functions'

export interface modalClass {
    close: () => void
    openAlterItem: (data: Record<string, any>) => void
    openAddItem: () => void
    getModal?: (name: string, data: Record<string, any>) => React.ReactElement
}

export const getModalFns = (setModal: setModalState): modalClass => ({
    close: closeModal(setModal),
    openAlterItem: openModalAlterItem(setModal),
    openAddItem: openModalAddItem(setModal),
    getModal
})
