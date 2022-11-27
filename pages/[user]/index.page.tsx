import { catalogTypes } from './types'
import Page404 from '../404/index.page'
import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Menu } from './components/Menu'
import { List } from './components/List'
import { BtnSignIn, Loading } from '../share/components'
import { requestData } from './fns/requestData'
import { MixedStruct } from '../share/structure/Mixed'
import { Movie } from '../share/types/Catalog/Movie'
import { getTitle } from 'pages/[user]/fns/getTitle'
import { Serie } from '../share/types/Catalog/Serie'
import React, { FC, useEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useContentLoad } from 'pages/share/store'
import { useAuth } from 'pages/share/auth/types/usetypes'
import Head from 'next/head'
import { useSetAuth } from 'pages/share/auth/types/setTypes'

const Catalog: FC = () => {
    const [list, setList] = useState<Array<Movie | Serie>>([])
    const [loadContent, setLoadContent] = useState(true)
    const contentLoad = useContentLoad()
    const router = useRouter()
    const { user, loading } = useAuth()
    const { signIn, signOut } = useSetAuth()
    const catalogURI = (router.query.catalog ?? 'doing') as string
    const userURI = router.query.user as string
    const isURIRight = catalogTypes.includes(catalogURI)
    if (!isURIRight) return <Page404 />

    useEffect(() => {
        setTimeout(() => contentLoad.setUnloading(), 1000)
        getData()
    }, [router])

    async function getData(): Promise<void> {
        try {
            setLoadContent(true)
            // const newList = await requestData(catalogURI, userURI)
            // setList(newList)
        } catch (e) {
            console.log(e)
        } finally {
            setLoadContent(false)
        }
    }

    const BtnSignHeader = <BtnSignIn onClick={signIn} />

    return (
        <div>
            <Head>
                <title>Star List | My List</title>
                <meta
                    name="description"
                    content="See all of your memories about movies, series, animations, books and games"
                />
            </Head>
            <div className="pt-48 sm:pt-36 mb-52">
                <Menu />
                {loadContent ? (
                    <Loading height="h-[550px]" />
                ) : (
                    <DndProvider backend={HTML5Backend}>
                        <List
                            title={getTitle(catalogURI).title}
                            description={getTitle(catalogURI).subtitle}
                            list={list}
                            setList={setList}
                        />
                    </DndProvider>
                )}
            </div>
        </div>
    )
}

export default Catalog
