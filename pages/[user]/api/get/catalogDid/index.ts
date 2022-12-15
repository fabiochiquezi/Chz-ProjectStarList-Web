import { db } from '../../../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { SerieDB } from '../../../../share/types/Catalog/Serie'
import { MovieDB } from '../../../../share/types/Catalog/Movie'
import { formatToDB } from '../../../../share/helpers'

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
