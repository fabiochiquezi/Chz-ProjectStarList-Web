import { db } from '../../../../firebase'
import { collection, getDocs } from 'firebase/firestore'

import { formatToDB } from '../../../../share/helpers'
import { MovieDB, SerieDB } from 'core'

export type GetCatalogDid = (
  userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogDid: GetCatalogDid = async userName => {
  const collect = collection(db, 'catalog', userName, 'did')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<MovieDB | SerieDB>(formatToDB)
  return list
}

export { getCatalogDid }
