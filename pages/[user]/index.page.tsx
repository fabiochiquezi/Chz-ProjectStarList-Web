import { catalogTypes } from './types'
import Page404 from '../404/index.page'
import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Menu } from './components/Menu'
import { List } from './components/List'
import { Loading } from '../share/components'
import { requestData } from './fns/requestData'
import { MixedStruct } from '../share/structure'
import { Movie } from '../share/types/Catalog/Movie'
import { getTitle } from 'pages/[user]/fns/getTitle'
import { Serie } from '../share/types/Catalog/Serie'
import React, { FC, useEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Catalog: FC = () => {
    console.log('xxx')
    const [list, setList] = useState<Array<Movie | Serie>>([])
    const [loadContent, setLoadContent] = useState(true)
    const router = useRouter()

    const catalogURI = (router.query.catalog ?? 'doing') as string
    const userURI = router.query.user as string
    const isURIRight = catalogTypes.includes(catalogURI)
    if (!isURIRight) return <Page404 />

    useEffect(() => {
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

    return (
        <MixedStruct
            titleSEO="Star List | My List"
            descriptionSEO="See all of your memories about movies, series, animations, books and games"
        >
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
        </MixedStruct>
    )
}

export default Catalog
