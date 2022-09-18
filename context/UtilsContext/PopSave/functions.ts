import React from 'react'

export const openPopSave =
    (setPop: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setPop(true)
    }

export const closePopSave =
    (setPop: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setPop(false)
    }
