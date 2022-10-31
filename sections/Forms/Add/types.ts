import { catalogI } from '../../../general/types/catalog'

export interface dataSubmit {
    thumb: string
}

export interface AddProps {
    setCatalogList: (
        table: string,
        id: string,
        data: catalogI[]
    ) => Promise<void>
}
