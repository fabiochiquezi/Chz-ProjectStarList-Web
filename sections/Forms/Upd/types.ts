import { catalogI } from 'types/catalog'

export interface props {
    dataItem: { index: number; thumb: string }
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}
