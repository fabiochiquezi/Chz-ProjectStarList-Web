import Page404 from '../404/index.page'
import { useRouter } from 'next/router'
import { List } from './components/List'
import { Menu } from './components/Menu'
import { GetServerSideProps } from 'next'
import { WatchData } from './types/watch'
import { Movie, Serie } from '../share/types'
import { Loading } from '../share/components'
import { Pagination } from './components/Pagination'
import { reqDefault, reqSearch } from 'pages/[user]/api'
import { Resp } from 'pages/share/types/_helpers/Response'
import { Struct } from '../share/structure/Struct/Private'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'

interface Data {
    data: Resp<WatchData<Movie | Serie>>
}

const New: FC<Data> = ({ data }) => {
    const { ok, data: req } = data
    if (!ok) return <Page404 />
    const reqList = req.list.results
    const maxPages = req.list.total_pages
    const router = useRouter()
    const routerPage = router.query.type
    const routerSearch = router.query.search
    const queryPage = router.query.page
    const page = queryPage ? parseInt(queryPage as string) : 1
    const [list, setList] = useState<Array<Movie | Serie>>([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (reqList) setList(reqList)
        setLoad(false)
    }, [router])

    function changeCatalog(e: ChangeEvent<HTMLSelectElement>): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
        router.push(e.target.value)
    }

    async function search(search: string): Promise<void> {
        setLoad(true)
        router.push(`${routerPage}?search=${search}`)
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

    return (
        <Struct
            titleSEO="Star List | New Works"
            descriptionSEO="Search for new works to add to your list"
        >
            <Menu
                searchFn={search}
                changeSelect={changeCatalog}
                resetSearch={resetSearch}
                routerType={routerPage as string}
            />
            {load ? (
                <Loading />
            ) : (
                <List
                    title={routerPage as string}
                    description="add + to your list"
                    list={list ?? []}
                    onClick={() => window.alert('click')}
                />
            )}
            <Pagination
                page={page}
                maxPages={maxPages ?? 1}
                changePage={changePage}
            />
        </Struct>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const type = context.query?.type as string
    const page = (context.query?.page ?? '1') as string
    const search = context.query?.search as string
    const isSearch = search?.length
    const data = { genres: [], list: null }
    // data.genres = await getGenreMovies()

    try {
        if (isSearch) data.list = await reqSearch(type, search, page)
        else data.list = await reqDefault(type, page)

        return { props: { data: { ok: true, data, error: '' } } }
    } catch (e: unknown) {
        let message = ''
        if (e instanceof Error) message = e.message
        const res = { ok: false, data: {}, error: message }
        return { props: { data: res } }
    }
}

export default New
