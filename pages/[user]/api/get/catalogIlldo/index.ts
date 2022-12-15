import { db } from '../../../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { formatToDB } from '../../../../share/helpers'
import { MovieDB, SerieDB } from 'core'

export type getListIlldo = (
  userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogIlldo: getListIlldo = async (userName: string) => {
  const collect = collection(db, 'catalog', userName, 'illdo')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<MovieDB | SerieDB>(formatToDB)
  return list
}

export { getCatalogIlldo }
