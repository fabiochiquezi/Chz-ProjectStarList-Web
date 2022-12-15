import { Movie, Serie } from 'core'
import { getCatalogDid } from '../get/catalogDid'
import { getCatalogDoing } from '../get/catalogDoing'
import { getCatalogIlldo } from '../get/catalogIlldo'

type IRequestData =
  (catalog: 'doing' | 'done' | 'illdo', userURI: string) =>
    Promise<Array<Movie | Serie>>

const getList: IRequestData = async (catalog, userURI) => {
  const requests = {
    doing: getCatalogDoing,
    done: getCatalogDid,
    illdo: getCatalogIlldo
  }
  const requestFn = requests[catalog]
  const list = await requestFn(userURI)
  return list
}

export { getList }
