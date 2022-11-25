import create from 'zustand'

interface UsePopSaveType {
    message: string
    open: (message?: string) => void
    close: () => void
}

const usePopSave = create<UsePopSaveType>()(set => ({
    message: '',
    open: message => set({ message }),
    close: () => set({ message: '' })
}))

export { usePopSave }
