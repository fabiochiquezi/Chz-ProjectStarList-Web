import Page404 from '../404/index.page'
import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Menu } from './components/Menu'
import { List } from './components/List'
import { MixedStruct } from 'structure/Struct/Mixed'
import { getCatalogDid } from './api/get/catalogDid'
import React, { FC, useEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getCatalogDoing } from './api/get/catalogDoing'
import { getCatalogIlldo } from './api/get/catalogIlldo'
import { Movie } from '../share/types/Catalog/Movie'
import { Serie } from '../share/types/Catalog/Serie'
import { LoadingStruct } from 'structure/Loadings/Default'
import { getTitle } from 'pages/[user]/fns/getTitle'

type CatalogTypes = 'doing' | 'did' | 'illdo'
const catalogTypes = ['doing', 'did', 'illdo']

async function requestData(
    catalogURI: string,
    userURI: string
): Promise<Array<Movie | Serie>> {
    let list
    switch (catalogURI) {
        case catalogTypes[0]:
            list = await getCatalogDoing(userURI)
            break
        case catalogTypes[1]:
            list = await getCatalogDid(userURI)
            break
        case catalogTypes[2]:
            list = await getCatalogIlldo(userURI)
            break
        default:
            list = await getCatalogDoing(userURI)
            break
    }
    return list
}

const Catalog: FC = () => {
    const router = useRouter()
    const catalogURI = (router.query.catalog ?? catalogTypes[0]) as string
    const userURI = router.query.user as string

    const isCatalogInCatalogTypes = catalogTypes.includes(catalogURI)
    if (!isCatalogInCatalogTypes) return <Page404 />

    const [loadContent, setLoadContent] = useState(true)
    const [list, setList] = useState<Array<Movie | Serie>>([])
    const { title, subtitle } = getTitle(catalogURI)

    async function getData(): Promise<void> {
        try {
            setLoadContent(true)
            const newList = await requestData(catalogURI, userURI)
            setList(newList)
        } catch (e) {
            console.log(e)
        } finally {
            setLoadContent(false)
        }
    }

    useEffect(() => {
        getData()
    }, [router])

    return (
        <MixedStruct
            titleSEO="Star List | My List"
            descriptionSEO="See all of your memories about movies, series, animations, books and games"
        >
            <Menu />
            {loadContent ? (
                <LoadingStruct height="h-[550px]" />
            ) : (
                <DndProvider backend={HTML5Backend}>
                    <List
                        title={title}
                        description={subtitle}
                        list={list}
                        setList={setList}
                    />
                </DndProvider>
            )}
        </MixedStruct>
    )
}

export default Catalog
