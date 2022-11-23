import Router from 'next/router'
import { Dispatch, SetStateAction } from 'react'

const changePage =
    (
        setLoad: Dispatch<SetStateAction<boolean>>,
        routerSearch: string | string[] | undefined,
        routerGenre: string | string[] | undefined,
        routerPage: string | string[] | undefined
    ) =>
    (newPage: number): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
        if (routerSearch) {
            Router.push(`${routerPage}?search=${routerSearch}&page=${newPage}`)
            return
        }
        if (routerGenre) {
            Router.push(`${routerPage}?genre=${routerGenre}&page=${newPage}`)
            return
        }
        Router.push(`${routerPage}?page=${newPage}`)
    }

export { changePage }
