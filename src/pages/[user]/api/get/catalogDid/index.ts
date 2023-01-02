import { db } from '../../../../../../fireSettings'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../../../libs/helpers'
import { MovieDB, SerieDB } from 'core'

export type GetCatalogDid = (
  userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogDid: GetCatalogDid = async userName => {
  const collect = collection(db, 'catalog', userName, 'did')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<MovieDB | SerieDB>(formatDataFromDB)
  return list
}

export { getCatalogDid }
