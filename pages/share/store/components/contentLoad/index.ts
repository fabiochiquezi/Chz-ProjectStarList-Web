import create from 'zustand'

interface UseContentLoadType {
    state: boolean
    setLoading: () => void
    setUnloading: () => void
}

const useContentLoad = create<UseContentLoadType>()(set => ({
    state: true,
    setLoading: () => set({ state: true }),
    setUnloading: () => set({ state: false })
}))

export { useContentLoad }
