import create from 'zustand'

interface UseAlertType {
    message: string
    mode: 0 | 1 | 2 | 3
    success: (message: string) => void
    error: (message: string) => void
    close: () => void
}

const useAlert = create<UseAlertType>()(set => ({
    message: '',
    mode: 0,
    success: message => set({ message, mode: 1 }),
    error: message => set({ message, mode: 2 }),
    close: () => set({ message: '', mode: 0 })
}))

export { useAlert }
