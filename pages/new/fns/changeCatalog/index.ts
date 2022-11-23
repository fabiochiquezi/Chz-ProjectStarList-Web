import Router from 'next/router'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type ChangeCatalog = (
    setLoad: Dispatch<SetStateAction<boolean>>
) => (e: ChangeEvent<HTMLSelectElement>) => void

const changeCatalog: ChangeCatalog = setLoad => e => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setLoad(true)
    Router.push(e.target.value)
}

export { changeCatalog }
