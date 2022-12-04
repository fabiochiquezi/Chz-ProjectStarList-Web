import { Movie, Serie } from 'pages/share/types'
import React, { useEffect, useState } from 'react'
import { getList } from './api/get'

export type IList = Array<Movie | Serie> | null

const useList = (catalogURI, userName, asPath) => {
  const [list, setList] = useState<IList>(null)

  async function getData(): Promise<void> {
    try {
      const newList = await getList(catalogURI, userName)
      setList(newList)
    } catch (e) {
      // await router.push('404')
    }
  }

  useEffect(() => { getData() }, [asPath])

  return { list, setList }
}

export { useList }
