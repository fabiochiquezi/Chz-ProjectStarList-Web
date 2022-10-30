import Head from 'next/head'
import Page404 from 'pages/404'
import { useRouter } from 'next/router'
import { Footer } from 'sections/Footer'
import { GetServerSideProps } from 'next'
import { catalogI } from 'store/catalog/types'
import { Header } from 'sections/Header/System'
import { ListAPI } from 'sections/List/ListAPI'
import { MenuListAPI } from 'sections/Menu/ListAPI'
import { Pagination } from 'sections/Pagination/Default'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import { getBooks, getMovies, getSeries } from 'general/api/thirdReq'
import { LoadingStruct } from 'components/Structure/Loadings/Default'

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

    const [loadContent, setLoadContent] = useState(true)
    const router = useRouter()
    const page = router.query.page ? parseInt(router.query.page as string) : 1

    useEffect(() => {
        setTimeout(() => setLoadContent(false), 1000)
        // setLoadContent(false)
        // window.scrollTo({ top: 100, behavior: 'smooth' })
    }, [router.asPath])

    function onLoad(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setLoadContent(true)
    }

    const LoadComp = <LoadingStruct />
    const ListComp = <ListAPI catalog={list ?? []} />
    const List = (): ReactElement => (loadContent ? LoadComp : ListComp)
    return (
        <div>
            <Head>
                <title>Star List | New Works</title>
                <meta
                    name="description"
                    content="Search for new works to add to your list"
                />
            </Head>
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                    <MenuListAPI onLoad={onLoad} />
                    <List />
                    <Pagination page={page} onLoad={onLoad} />
                </div>
            </div>
            <Footer />
        </div>
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
