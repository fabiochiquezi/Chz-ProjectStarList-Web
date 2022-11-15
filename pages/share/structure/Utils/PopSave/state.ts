import React from 'react'

export type popSaveState = boolean
export type setPopSaveState = React.Dispatch<React.SetStateAction<popSaveState>>
export const popSaveInitialState: popSaveState = false
