import create from 'zustand'

interface IUsePopSave {
  message: string
  open: (message?: string) => void
  close: () => void
}

const usePopSave = create<IUsePopSave>()(set => ({
  message: '',
  open: message => set({ message }),
  close: () => set({ message: '' })
}))

export { usePopSave }
