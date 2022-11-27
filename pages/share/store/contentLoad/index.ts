import create from 'zustand'

interface IUseContentLoad {
  state: boolean
  setLoading: () => void
  setUnloading: () => void
}

const useContentLoad = create<IUseContentLoad>()(set => ({
  state: true,
  setLoading: () => set({ state: true }),
  setUnloading: () => set({ state: false })
}))

export { useContentLoad }
