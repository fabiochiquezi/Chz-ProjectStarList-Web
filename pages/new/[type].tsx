import Page404 from 'pages/404'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { Struct } from 'structure/Struct'
import { ListAPI } from 'sections/List/ListAPI'
import MenuListAPI from 'sections/Menu/ListAPI'
import { catalogI } from '../../general/types/catalog'
import React, { FC, useEffect, useState } from 'react'
import { Pagination } from 'sections/Pagination/Default'
import { LoadingStruct } from 'structure/Loadings/Default'
import { getMovie, getMovies, getSeries } from 'api/thirdReq'

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
    const title = 'Star List | New Works'
    const description = 'Search for new works to add to your list'

    const router = useRouter()
    const queryPage = router.query.page
    const page = queryPage ? parseInt(queryPage as string) : 1
    const [reactList, setReactList] = useState<catalogI[]>()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (list) setReactList(list)
        setLoad(false)
    }, [router.asPath])

    async function searchMovie(search: string): Promise<void> {
        setLoad(true)
        const movie = await getMovie(search)
        setReactList(movie)
        setTimeout(() => setLoad(false), 300)
    }

    function onLoad(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoad(true)
    }

    return (
        <Struct titleSEO={title} descriptionSEO={description}>
            <MenuListAPI searchFn={searchMovie} onLoad={onLoad} />
            {load ? <LoadingStruct /> : <ListAPI catalog={reactList ?? []} />}
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
            // case 'books':
            //     list = await getBooks(page)
            //     break
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
