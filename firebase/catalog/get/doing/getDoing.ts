import { db } from 'firebase/settings'
import { generalFormat } from 'firebase/_helpers/format'
import { collection, getDocs } from 'firebase/firestore'
import { MovieDB } from '../../../../types/models/Catalog/Movie'
import { SerieDB } from '../../../../types/models/Catalog/Serie'

export type GetListDoing = (
    userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getListDoing: GetListDoing = async userName => {
    const collect = collection(db, 'catalog', userName, 'doing')
    const querySnapshot = await getDocs(collect)
    const list = querySnapshot.docs.map<MovieDB | SerieDB>(generalFormat)
    return list
}

export { getListDoing }
