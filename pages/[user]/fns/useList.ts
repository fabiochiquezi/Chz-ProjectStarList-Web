import React, { useEffect, useState } from 'react'
import { Movie, Serie } from 'pages/share/types'
import { getList } from '../api/get'

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
      const newList = await getList(catalogURI, userName)
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
