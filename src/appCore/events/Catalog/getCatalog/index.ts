import { Movie, Serie } from '../../../domain'
import { ICatalogTypes } from '../../../domain/Globals'
import { collection, getDocs } from 'firebase/firestore'
import { formatDataFromDB } from '../../../../libs/firebase'
import { db } from '../../../../appShare/settings/fireSettings'

export type IGetCatalog = (catalog: ICatalogTypes) => (userName: string) => Promise<Array<Movie | Serie>>

export const getCatalog: IGetCatalog = catalog => async userName => {
  const collect = collection(db, 'catalog', userName, catalog)
  const querySnapshot = await getDocs(collect)
  const list = querySnapshot.docs.map<Movie | Serie>(formatDataFromDB)
  return list
}
