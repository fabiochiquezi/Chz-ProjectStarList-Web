import { Movie, Serie } from '../../../domain'
import React, { useEffect, useState } from 'react'
import { getCatalog } from 'src/appCore/events/Catalog/getCatalog'

export type IList = Array<Movie | Serie> | null

type IUseList = (
  catalogURI: string,
  userName: string,
  asPath: string
) => {
  list: IList;
  setList: React.Dispatch<React.SetStateAction<IList>>;
}

const useList: IUseList = (catalogURI, userName, asPath) => {
  const [list, setList] = useState<IList>(null)

  async function getData(): Promise<void> {
    try {
      const newList = await getCatalog(catalogURI)(userName)
      setList(newList)
    } catch (e) {
      console.log(e)
      setList([])
    }
  }

  useEffect(() => { getData() }, [asPath])
  return { list, setList }
}

export { useList }
