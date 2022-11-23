import Router from 'next/router'
import { Dispatch, SetStateAction } from 'react'

type ResetSearch = (
    setLoad: Dispatch<SetStateAction<boolean>>,
    routerPage: string | string[] | undefined
) => () => void

const resetSearch: ResetSearch = (setLoad, routerPage) => () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    Router.push(`${routerPage}`)
}

export { resetSearch }
