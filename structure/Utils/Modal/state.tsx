import React from 'react'

export interface modalState {
    name: string
    sateModal: boolean
    data: Record<string, any>
}

export type setModalState = React.Dispatch<React.SetStateAction<modalState>>

export const modalInitialState: modalState = {
    name: '',
    sateModal: false,
    data: {}
}
