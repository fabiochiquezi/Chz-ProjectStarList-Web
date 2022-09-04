import create from 'zustand'
import { catalogI } from '../general/types/catalog'

interface DoingState {
    data: any
    setData: (data: catalogI[], type: string) => void
}

const useCatalogStore = create<DoingState>(set => ({
    data: {
        doing: [],
        illdo: [],
        did: []
    },
    setData: (newData, type) =>
        set(state => {
            state.data[type] = newData
            return { ...state.data }
        })
}))

export { useCatalogStore }
