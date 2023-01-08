import { formatDataFromDB } from '../../../../libs/helpers'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../../fireSettings'
import { Movie, Serie } from '../../../domain'

export type getListIlldo = (
  userName: string
) => Promise<Array<Movie | Serie>>

const getCatalogIlldo: getListIlldo = async (userName: string) => {
  const collect = collection(db, 'catalog', userName, 'illdo')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<Movie | Serie>(formatDataFromDB)
  return list
}

export { getCatalogIlldo }
