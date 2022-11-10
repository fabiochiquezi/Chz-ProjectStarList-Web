import { db } from 'firebase/settings'
import { MovieDB, SerieDB } from 'types/TMDB'
import { generalFormat } from 'firebase/_helpers/format'
import { collection, getDocs } from 'firebase/firestore'

export type getListIlldo = (
    userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getIlldo: getListIlldo = async (userName: string) => {
    const collect = collection(db, 'catalog', userName, 'illdo')
    const querySnapshot = await getDocs(collect)
    const list = querySnapshot.docs.map<MovieDB | SerieDB>(generalFormat)
    return list
}

export { getIlldo }
