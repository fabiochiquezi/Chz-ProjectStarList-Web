import { Movie, Serie } from '../../../../../domain'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../../../libs/firebase'
import { db } from '../../../../../../appShare/settings/fireSettings'

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
