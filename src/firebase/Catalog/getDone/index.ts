import { db } from '../../../../fireSettings'
import { Movie, Serie } from '../../../domain'
import { formatToDB } from '../../../../libs/helpers'
import { collection, getDocs } from 'firebase/firestore'

export type GetCatalogDid = (
  userName: string
) => Promise<Array<Movie | Serie>>

const getCatalogDid: GetCatalogDid = async userName => {
  const collect = collection(db, 'catalog', userName, 'did')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<Movie | Serie>(formatToDB)
  return list
}

export { getCatalogDid }
