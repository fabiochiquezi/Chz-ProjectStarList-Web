import Page404 from 'pages/404'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { catalogI } from 'store/catalog/types'
import { ListAPI } from 'sections/List/ListAPI'
import { Struct } from 'structure/Struct'
import { MenuListAPI } from 'sections/Menu/ListAPI'
import { Pagination } from 'sections/Pagination/Default'
import { getBooks, getMovies, getSeries } from 'api/thirdReq'
import { LoadingStruct } from '../../structure/Loadings/Default'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useSetUtils } from 'structure/Utils/types'

interface Data {
    data: {
        ok: boolean
        data: catalogI[] | null
        error: string
    }
}

const New: FC<Data> = ({ data }) => {
    const { ok, data: list } = data
    if (!ok) return <Page404 />

    const { setContentLoadState } = useSetUtils()
    const router = useRouter()
    const queryPage = router.query.page
    const page = queryPage ? parseInt(queryPage as string) : 1

    useEffect(() => {
        setTimeout(() => setContentLoadState(false), 1000)
    }, [router.asPath])

    function onLoad(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setContentLoadState(true)
    }

    return (
        <Struct
            titleSEO="Star List | New Works"
            descriptionSEO="Search for new works to add to your list"
        >
            <MenuListAPI onLoad={onLoad} />
            <ListAPI catalog={list ?? []} />
            <Pagination page={page} onLoad={onLoad} />
        </Struct>
    )
}

type ServerProps = GetServerSideProps<{ data: any }>
export const getServerSideProps: ServerProps = async context => {
    try {
        const type = context.query?.type
        const page = (context.query?.page ?? '1') as string
        let list = []
        switch (type) {
            case 'movies':
                list = await getMovies(page)
                break
            case 'series':
                list = await getSeries(page)
                break
            case 'books':
                list = await getBooks(page)
                break
            default:
                list = await getMovies(page)
                break
        }

        const res = { ok: true, data: list, error: '' }
        return { props: { data: res } }
    } catch (e: any) {
        const res = { ok: false, data: null, error: e.message }
        return { props: { data: res } }
    }
}

export default New
