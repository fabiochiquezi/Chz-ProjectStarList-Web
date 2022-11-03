import Page404 from 'pages/404'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { Struct } from 'structure/Struct'
import { DataTMDBT, MovieT } from 'types/TMDB'
import { ListAPI } from 'sections/List/ListAPI'
import MenuListAPI from 'sections/Menu/ListAPI'
import { Pagination } from 'sections/Pagination/Default'
import { LoadingStruct } from 'structure/Loadings/Default'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import {
    // getGenreMovies,
    getMovie,
    getMovies,
    getSerie,
    getSeries
} from 'api/watch'
import { Response } from 'types/general'

interface Data {
    data: Response<DataTMDBT>
}

const New: FC<Data> = ({ data }) => {
    console.log(data)
    const { ok, data: req } = data
    if (!ok) return <Page404 />
    const title = 'Star List | New Works'
    const description = 'Search for new works to add to your list'
    const reqList = req?.list?.results
    const maxPages = req?.list?.total_pages

    const router = useRouter()
    const routerPage = router.query.type
    const routerSearch = router.query.search
    const queryPage = router.query.page
    const page = queryPage ? parseInt(queryPage as string) : 1
    const [list, setList] = useState<MovieT[]>()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (reqList) setList(reqList)
        setLoad(false)
    }, [router])

    async function searchMovie(search: string): Promise<void> {
        setLoad(true)
        router.push(`${routerPage}?search=${search}`)
    }

    function changeSelect(e: any): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
        router.push(e.target.value)
    }

    function resetSearch(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
        router.push(`${routerPage}`)
    }

    function changePage(newPage: number): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
        if (routerSearch) {
            router.push(`${routerPage}?search=${routerSearch}&page=${newPage}`)
            return
        }
        router.push(`${routerPage}?page=${newPage}`)
    }

    const LoadComp = <LoadingStruct />
    const ListComp = (
        <ListAPI title={routerPage as string} catalog={list ?? []} />
    )
    const Core = (): ReactElement => (load ? LoadComp : ListComp)

    return (
        <Struct titleSEO={title} descriptionSEO={description}>
            <MenuListAPI
                searchFn={searchMovie}
                changeSelect={changeSelect}
                resetSearch={resetSearch}
            />
            <Core />
            <Pagination
                maxPages={maxPages ?? 1}
                page={page}
                changePage={changePage}
            />
        </Struct>
    )
}

async function reqSearch(
    type: string,
    search: string,
    page: string
): Promise<any> {
    let list
    switch (type) {
        case 'movies':
            list = await getMovie(search, page)
            break
        case 'series':
            list = await getSerie(search, page)
            break
    }
    return list
}

async function reqDefault(type: string, page: string): Promise<any> {
    let list
    switch (type) {
        case 'movies':
            list = await getMovies(page)
            break
        case 'series':
            list = await getSeries(page)
            break
        default:
            list = await getMovies(page)
            break
    }
    return list
}

type ServerProps = GetServerSideProps<{ data: Response<DataTMDBT> }>
export const getServerSideProps: ServerProps = async context => {
    const type = context.query?.type as string
    const page = (context.query?.page ?? '1') as string
    const search = context.query?.search as string
    const isSearch = search?.length

    const data: DataTMDBT = { genres: [], list: null }
    // data.genres = await getGenreMovies()

    try {
        if (isSearch) data.list = await reqSearch(type, search, page)
        else data.list = await reqDefault(type, page)

        return { props: { data: { ok: true, data, error: '' } } }
    } catch (e: any) {
        const res = { ok: false, data: null, error: e.message }
        return { props: { data: res } }
    }
}

export default New
