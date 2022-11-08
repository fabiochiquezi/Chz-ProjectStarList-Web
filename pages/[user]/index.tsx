import Page404 from 'pages/404'
import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Movie, Serie } from 'types/TMDB'
import { Menu } from 'sections/List/Drag/Menu'
import { Struct } from 'structure/Struct/System'
import { DragAndDropList } from 'sections/List/Drag'
import React, { FC, useEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getDid } from 'firebase/catalog/get/did/getDid'
import { LoadingStruct } from 'structure/Loadings/Default'
import { getTitle } from 'sections/List/components/getTitle'
import { getDoing } from 'firebase/catalog/get/doing/getDoing'
import { getIlldo } from 'firebase/catalog/get/illdo/getDoing'
import { MixedStruct } from 'structure/Struct/Mixed'

const catalogTypes = ['doing', 'did', 'illdo']

async function requestData(
    catalogURI: string,
    userURI: string
): Promise<Array<Movie | Serie>> {
    let list
    switch (catalogURI) {
        case catalogTypes[0]:
            list = await getDoing(userURI)
            break
        case catalogTypes[1]:
            list = await getDid(userURI)
            break
        case catalogTypes[2]:
            list = await getIlldo(userURI)
            break
        default:
            list = await getDoing(userURI)
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
                    <DragAndDropList
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
