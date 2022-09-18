import React from 'react'
import { closePopSave, openPopSave } from './functions'

export interface popSaveClass {
    close: () => void
    open: () => void
}

export const getPopSaveFns = (
    setPopSave: React.Dispatch<React.SetStateAction<boolean>>
): popSaveClass => ({
    close: closePopSave(setPopSave),
    open: openPopSave(setPopSave)
})
