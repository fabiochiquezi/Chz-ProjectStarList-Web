import { createContext, useContext } from 'react'

export interface UtilsT {
    contentLoad: {
        message: string
        state: boolean
        open: (
            newState?: { message?: string; mode?: number },
            delay?: number | null
        ) => void
        close: (delay?: number | null) => void
        toggle: () => void
    }
    popSave: {
        message: string
        state: boolean
        open: (
            newState?: { message?: string; mode?: number },
            delay?: number | null
        ) => void
        close: (delay?: number | null) => void
        toggle: () => void
    }
    alert: {
        message: string
        state: boolean
        open: (
            newState?: { message?: string; mode?: number },
            delay?: number | null
        ) => void
        close: (delay?: number | null) => void
        toggle: () => void
    }
}

export const UtilsContext = createContext<UtilsT>({
    contentLoad: {
        message: '',
        state: true,
        open: () => {},
        close: () => {},
        toggle: () => {}
    },
    popSave: {
        message: '',
        state: false,
        open: () => {},
        close: () => {},
        toggle: () => {}
    },
    alert: {
        message: '',
        state: false,
        open: () => {},
        close: () => {},
        toggle: () => {}
    }
})

export const useUtils = (): UtilsT => useContext(UtilsContext)
