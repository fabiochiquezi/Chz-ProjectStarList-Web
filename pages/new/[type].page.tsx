import { Data } from './types'
import { isString } from 'formik'
import ErrorPage from 'pages/error'
import { useRouter } from 'next/router'
import { List } from './components/List'
import { Menu } from './components/Menu'
import { GetServerSideProps } from 'next'
import { Movie, Serie } from '../share/types'
import { Loading } from '../share/components'
import { getMovie } from './api/watch/getMovie'
import { getSerie } from './api/watch/getSerie'
import { getMovies } from './api/watch/getMovies'
import { getSeries } from './api/watch/getSeries'
import { Pagination } from './components/Pagination'
import { Resp } from 'pages/share/types/_helpers/Response'
import { Struct } from '../share/structure/Struct/Private'
import { getGenreMovies } from './api/watch/getGenreMovies'
import { discoverMovies } from './api/watch/discoverMovies'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { discoverSeries } from './api/watch/discoverSeries'
import { getGenreSeries } from './api/watch/getGenreSeries'

interface SRRData {
    data: Resp<Data<Movie | Serie>>
}

const New: FC<SRRData> = ({ data }) => {
    const { ok, data: req } = data
    if (!ok) return <ErrorPage />
    const genreList = req.genres
    const reqList = req.list.results
    const maxPages = req.list.total_pages
    const router = useRouter()
    const queryPage = router.query.page
    const routerPage = router.query.type
    const routerSearch = router.query.search
    const routerGenre = router.query.genre
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

    function genreFilter(e: ChangeEvent<HTMLSelectElement>): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
        router.push(`${routerPage}?genre=${e.target.value}`)
    }

    function search(search: string): void {
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
        if (routerGenre) {
            router.push(`${routerPage}?genre=${routerGenre}&page=${newPage}`)
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
                routerGenre={routerGenre}
                searchFn={search}
                genreList={genreList}
                genreFilter={genreFilter}
                resetSearch={resetSearch}
                changeCatalog={changeCatalog}
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
    try {
        const type = context.query?.type ?? 'movies'
        const page = context.query.page ?? '1'
        const search = context.query?.search ?? ''
        const genreFilter = context.query?.genre ?? ''
        if (!isString(type)) throw new Error('Invalid type')
        if (!isString(page)) throw new Error('Invalid page')
        if (!isString(search)) throw new Error('Invalid search')
        if (!isString(genreFilter)) throw new Error('Invalid search')

        const permitedTypes = ['movies', 'series', 'games', 'books']
        const isTypePermited = permitedTypes.includes(type)
        if (!isTypePermited) throw new Error('Invalid type')

        const searchAndFiltersTogether = search && genreFilter
        if (searchAndFiltersTogether) throw new Error('Bad Request')

        let list
        let genres
        switch (type) {
            case 'movies':
                genres = await getGenreMovies()
                if (genreFilter) {
                    list = await discoverMovies([genreFilter], page)
                }
                if (search) list = await getMovie(search, page)
                if (!search && !genreFilter) list = await getMovies(page)
                break
            case 'series':
                genres = await getGenreSeries()
                if (genreFilter) {
                    list = await discoverSeries([genreFilter], page)
                }
                if (search) list = await getSerie(search, page)
                if (!search && !genreFilter) list = await getSeries(page)
                break
            default:
                throw new Error('Ivalid Type')
        }

        return {
            props: { data: { ok: true, data: { genres, list }, error: '' } }
        }
    } catch (e: unknown) {
        let message = ''
        if (e instanceof Error) message = e.message
        const res = { ok: false, data: {}, error: message }
        return { props: { data: res } }
    }
}

export default New
