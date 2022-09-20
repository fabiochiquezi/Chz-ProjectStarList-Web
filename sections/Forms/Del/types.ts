import { catalogI } from 'store/catalog/types'

export interface DelProps {
    dataItem: { index: number; thumb: string }
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}
