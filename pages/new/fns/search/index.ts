import Router from 'next/router'
import { Dispatch, SetStateAction } from 'react'

type Search = (
    setLoad: Dispatch<SetStateAction<boolean>>,
    routerPage: string | string[] | undefined
) => (search: string) => void

const search: Search = (setLoad, routerPage) => search => {
    setLoad(true)
    Router.push(`${routerPage}?search=${search}`)
}

export { search }
