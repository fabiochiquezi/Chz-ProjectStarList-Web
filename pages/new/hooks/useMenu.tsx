import { useRouter } from 'next/router'

export type IUseMenu = (setLoad: any, search: any, type: any, genre: any) => {
  changeCatalog: (e: any) => void;
  changePage: (newPage: number) => void;
  genreFilter: (e: any) => void;
  resetSearch: () => void;
  searchFn: (search: string) => void;
}

const useMenu: IUseMenu = (setLoad, search, type, genre) => {
  const router = useRouter()

  const changeCatalog = (e: any): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    router.push(e.target.value)
  }

  const changePage = (newPage: number): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    if (search) {
      router.push(`${type}?search=${search}&page=${newPage}`)
      return
    }
    if (genre) {
      router.push(`${type}?genre=${genre}&page=${newPage}`)
      return
    }
    router.push(`${type}?page=${newPage}`)
  }

  const genreFilter = (e: any): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    router.push(`${type}?genre=${e.target.value}`)
  }

  const resetSearch = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    router.push(`${type}`)
  }

  const searchFn = (search: string): void => {
    setLoad(true)
    router.push(`${type}?search=${search}`)
  }

  return { changeCatalog, changePage, genreFilter, resetSearch, searchFn }
}

export { useMenu }
