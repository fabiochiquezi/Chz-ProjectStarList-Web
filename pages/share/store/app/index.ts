import create from 'zustand'

interface IUseContentLoad {
  loadingUI: boolean
  loadUI: () => void
  unloadUI: () => void
  loadingServer: boolean
  loadServer: () => void
  unloadServer: () => void
}

const useAppStore = create<IUseContentLoad>()(set => ({
  loadingUI: true,
  loadingServer: true,
  loadUI: () => set({ loadingUI: true }),
  unloadUI: () => set({ loadingUI: false }),
  loadServer: () => set({ loadingServer: true }),
  unloadServer: () => set({ loadingServer: false })
}))

export { useAppStore }
