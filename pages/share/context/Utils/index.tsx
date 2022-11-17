import { PopSave } from './components/PopSave/index'
import { SetUtilsContext } from './types/setTypes'
import { UtilsContext } from './types/useTypes'
import { FC, ReactNode, useState } from 'react'
import { close, open, toggle } from './fns'

interface UtilsProviderType {
    children: ReactNode
}

const UtilsProvider: FC<UtilsProviderType> = ({ children }) => {
    const [contentLoadState, setContentLoadState] = useState(true)
    const [popSave, setPopSave] = useState(false)

    return (
        <UtilsContext.Provider value={{ popSave, contentLoadState }}>
            <SetUtilsContext.Provider
                value={{
                    popSave: {
                        open: () => open(setPopSave),
                        close: (time: number | null) => close(time)(setPopSave),
                        toggle: () => toggle(setPopSave)
                    },
                    contentLoad: {
                        open: () => open(setContentLoadState),
                        close: (time: number | null) =>
                            close(time)(setContentLoadState),
                        toggle: () => toggle(setContentLoadState)
                    }
                }}
            >
                {popSave && <PopSave />}
                {children}
            </SetUtilsContext.Provider>
        </UtilsContext.Provider>
    )
}

export { UtilsProvider }
