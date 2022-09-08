import create from 'zustand'
import { catalogI } from 'types/catalog'

interface CatalogState {
    data: any
    setData: (newData: catalogI[], type: string) => void
    addItem: (item: catalogI, type: string) => void
    updateItem: (index: number, newData: catalogI, type: string) => void
    deleteItem: (index: number, type: string) => void
    resetData: () => void
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
            return state.data
        }),
    resetData: () =>
        set(state => {
            state.data = {
                doing: [],
                illdo: [],
                did: []
            }
            return state.data
        }),
    addItem: (item, type) =>
        set(state => {
            state.data[type] = [...state.data[type], item]
            return state.data
        }),
    updateItem: (index, newData, type) =>
        set(state => {
            state.data[type][index] = newData

            return state.data
        }),
    deleteItem: (index, type) =>
        set(state => {
            const newArr = state.data[type].filter(
                (_: any, indexArr: number) => {
                    return indexArr != index
                }
            )
            state.data[type] = newArr
            return state.data
        })
}))

export { useCatalogStore }
