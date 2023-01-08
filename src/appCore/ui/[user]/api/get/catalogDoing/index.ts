import { Movie, Serie } from '../../../../../domain'
import { db } from '../../../../../../../fireSettings'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../../../libs/firebase'

export type GetListDoing = (
  userName: string
) => Promise<Array<Movie | Serie>>

const getCatalogDoing: GetListDoing = async userName => {
  const collect = collection(db, 'catalog', userName, 'doing')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<Movie | Serie>(formatDataFromDB)
  return list
}

export { getCatalogDoing }
