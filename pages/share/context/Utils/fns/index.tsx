import { Dispatch, SetStateAction } from 'react'

type ToggleFn = (set: Dispatch<SetStateAction<boolean>>) => void

const toggle: ToggleFn = set => {
    set(prev => !prev)
}

const open: ToggleFn = set => {
    set(true)
}

const close =
    (delay: number | null): ToggleFn =>
    set => {
        if (delay) {
            setTimeout(() => {
                set(false)
            }, delay)
            return
        }
        set(false)
    }

export { toggle, open, close }
