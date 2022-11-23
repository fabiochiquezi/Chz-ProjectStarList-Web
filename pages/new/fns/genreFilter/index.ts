import Router from 'next/router'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type GenreFilter = (
    setLoad: Dispatch<SetStateAction<boolean>>,
    routerPage: string | string[] | undefined
) => (e: ChangeEvent<HTMLSelectElement>) => void

const genreFilter: GenreFilter = (setLoad, routerPage) => e => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    Router.push(`${routerPage}?genre=${e.target.value}`)
}

export { genreFilter }
