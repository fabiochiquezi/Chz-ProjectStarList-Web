import { collection, getDocs } from 'firebase/firestore'
import { formatToDB } from '../../../../libs/helpers'
import { db } from '../../../../fireSettings'
import { Movie, Serie } from '../../../domain'

export type getListIlldo = (
  userName: string
) => Promise<Array<Movie | Serie>>

const getCatalogIlldo: getListIlldo = async (userName: string) => {
  const collect = collection(db, 'catalog', userName, 'illdo')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<Movie | Serie>(formatToDB)
  return list
}

export { getCatalogIlldo }
