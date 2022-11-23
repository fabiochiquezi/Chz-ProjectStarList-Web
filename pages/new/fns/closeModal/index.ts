import { Dispatch, SetStateAction } from 'react'

type SetModal = Dispatch<
    SetStateAction<{
        state: boolean
        item: string
    }>
>
export type CloseModal = (setAddModal: SetModal) => void

export const closeModal: CloseModal = setAddModal =>
    setAddModal(prev => ({ ...prev, state: false }))
