import { createContext, useContext } from 'react'

interface ToggleFns {
    close: (delay: number | null) => void
    open: () => void
    toggle: () => void
}

export interface SetUtilsT {
    popSave: ToggleFns
    contentLoad: ToggleFns
}

const defaultFunctions = {
    close: () => {},
    open: () => {},
    toggle: () => {}
}

export const SetUtilsContext = createContext<SetUtilsT>({
    popSave: defaultFunctions,
    contentLoad: defaultFunctions
})

export const useSetUtils = (): SetUtilsT => useContext(SetUtilsContext)
