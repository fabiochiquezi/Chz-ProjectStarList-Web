import React from 'react'

export const openPopSave =
    (setPop: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setPop(true)
    }

export const closePopSave =
    (setPop: React.Dispatch<React.SetStateAction<boolean>>) =>
    (delay?: number) => {
        if (delay) {
            setTimeout(() => {
                setPop(false)
            }, delay)
            return
        }
        setPop(false)
    }
