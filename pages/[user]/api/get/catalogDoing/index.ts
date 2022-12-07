import { db } from '../../../../share/settings/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { MovieDB } from '../../../../share/types/Catalog/Movie'
import { SerieDB } from '../../../../share/types/Catalog/Serie'
import { generalFormat } from '../../../../share/helpers/format'

export type GetListDoing = (
  userName: string
) => Promise<Array<MovieDB | SerieDB>>

const getCatalogDoing: GetListDoing = async userName => {
  const collect = collection(db, 'catalog', userName, 'doing')
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<MovieDB | SerieDB>(generalFormat)
  return list
}

export { getCatalogDoing }
