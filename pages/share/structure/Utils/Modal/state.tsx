import { Dispatch, SetStateAction } from 'react'

export interface modalState {
    name: string
    sateModal: boolean
    data: Record<string, any>
}
export type setModalState = Dispatch<SetStateAction<modalState>>

export const modalInitialState: modalState = {
    name: '',
    sateModal: false,
    data: {}
}
