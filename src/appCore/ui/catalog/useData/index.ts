import { getTitle } from './getTitle'
import { useRouter } from 'next/router'
import { Movie, Serie } from '../../../domain'
import { getCatalogType, getUserName } from './getQuery'
import { getCatalog } from '../../../events/Catalog/getCatalog'
import { catalogTypes, ICatalogTypes } from '../../../domain/Globals'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { verifyCatalogExists } from '../../../events/Catalog/testCatalog'

export type IList = Array<Movie | Serie> | null
export type IUseList = (signInProcess: boolean) => {
  userName: string;
  catalogType: string;
  list: IList;
  loadingData: boolean;
  setList: Dispatch<SetStateAction<IList>>;
  titleData: { title: string, description: string }
}

export const useData: IUseList = (signInProcess) => {
  const { push, query, asPath } = useRouter()
  const [list, setList] = useState<IList>(null)
  const [loadingData, setLoadingData] = useState(true)
  const [titleData, setTitleData] = useState({ title: '', description: '' })

  const userName = getUserName(query)
  const catalogType = getCatalogType(query) as ICatalogTypes

  useEffect(() => {
    initiateProcess()
  }, [asPath, signInProcess])

  const initiateProcess = async (): Promise<unknown> => !signInProcess &&
    await validCatalog(catalogType)
      .then(async () => setLoadingData(true))
      .then(async () => await getCatalogData())
      .then(() => setTitleData(getTitleData(catalogType)))
      .then(() => setLoadingData(false))

  const getCatalogData = async (): Promise<unknown> =>
    await verifyCatalogExists(userName).then(async verify => (verify
      ? await requestData()
      : await push('404'))
    )

  const requestData = async (): Promise<void> =>
    await getCatalog(catalogType)(userName)
      .then(data => setList(data))
      .catch(() => setList([]))

  const validCatalog = async (catalogURI: string): Promise<boolean> =>
    (!catalogTypes.includes(catalogURI) && await push('404'))

  const getTitleData = (catalogType: string): any => ({
    title: getTitle(catalogType).title,
    description: getTitle(catalogType).description
  })

  return { titleData, loadingData, userName, catalogType, list, setList }
}
