import { db } from '../../../settings'
import { generalFormat } from 'firebase/_helpers/format'
import { collection, getDocs } from 'firebase/firestore'
import { MovieDB } from '../../../../types/models/Catalog/Movie'
import { SerieDB } from '../../../../types/models/Catalog/Serie'

export type GetCatalogDid = (
    userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogDid: GetCatalogDid = async userName => {
    const collect = collection(db, 'catalog', userName, 'did')
    const querySnapshot = await getDocs(collect)
    const list = querySnapshot.docs.map<MovieDB | SerieDB>(generalFormat)
    return list
}

export { getCatalogDid }
