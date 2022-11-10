import { db } from 'firebase/settings'
import { MovieDB, SerieDB } from 'types/TMDB'
import { generalFormat } from 'firebase/_helpers/format'
import { collection, getDocs } from 'firebase/firestore'

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
