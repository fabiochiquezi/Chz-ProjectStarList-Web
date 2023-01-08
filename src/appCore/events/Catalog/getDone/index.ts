import { Movie, Serie } from '../../../domain'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../libs/firebase'
import { db } from '../../../../appShare/settings/fireSettings'

export type GetCatalogDid = (
  userName: string
) => Promise<Array<Movie | Serie>>

const getCatalogDid: GetCatalogDid = async userName => {
  const collect = collection(db, 'catalog', userName, 'did')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<Movie | Serie>(formatDataFromDB)
  return list
}

export { getCatalogDid }
