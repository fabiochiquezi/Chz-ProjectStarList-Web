import React from 'react'

export interface alertState {
    message: string
    state: number
    hide: boolean
}

export type setAlertState = React.Dispatch<React.SetStateAction<alertState>>

export const alertInitialState: alertState = {
    message: '',
    state: 0,
    hide: true
}
