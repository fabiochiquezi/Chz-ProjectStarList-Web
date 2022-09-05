import create from 'zustand'
import { catalogI } from '../general/types/catalog'

interface CatalogState {
    data: any
    setData: (newData: catalogI[], type: string) => void
    addItem: (item: catalogI, type: string) => void
}

const useCatalogStore = create<CatalogState>(set => ({
    data: {
        doing: [],
        illdo: [],
        did: []
    },
    setData: (newData, type) =>
        set(state => {
            if (newData) state.data[type] = newData
            return { ...state.data }
        }),
    addItem: (item, type) =>
        set(state => {
            state.data[type] = [...state.data[type], item]
            return { ...state.data }
        })
}))

export { useCatalogStore }
