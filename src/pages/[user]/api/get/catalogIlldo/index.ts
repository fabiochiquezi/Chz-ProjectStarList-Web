import { db } from '../../../../../../fireSettings'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../../../libs/helpers'
import { MovieDB, SerieDB } from 'core'

export type getListIlldo = (
  userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogIlldo: getListIlldo = async (userName: string) => {
  const collect = collection(db, 'catalog', userName, 'illdo')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<MovieDB | SerieDB>(formatDataFromDB)
  return list
}

export { getCatalogIlldo }
