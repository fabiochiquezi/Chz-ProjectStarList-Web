import { db } from '../../../../../../fireSettings'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../../../libs/helpers'
import { MovieDB, SerieDB } from 'core'

export type GetListDoing = (
  userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogDoing: GetListDoing = async userName => {
  const collect = collection(db, 'catalog', userName, 'doing')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<MovieDB | SerieDB>(formatDataFromDB)
  return list
}

export { getCatalogDoing }
