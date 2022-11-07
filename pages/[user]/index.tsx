import { useRouter } from 'next/router'
import { DndProvider } from 'react-dnd'
import { Menu } from 'sections/List/Drag/Menu'
import { useCatalogStore } from 'store/catalog'
import { Struct } from 'structure/Struct/System'
import { DragAndDropList } from 'sections/List/Drag'
import React, { FC, useEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getDid } from 'firebase/catalog/get/did/getDid'
import { LoadingStruct } from 'structure/Loadings/Default'
import { getTitle } from 'sections/List/components/getTitle'
import { getDoing } from 'firebase/catalog/get/doing/getDoing'
import { getIlldo } from 'firebase/catalog/get/illdo/getDoing'

const Catalog: FC = () => {
    const catalogTypes = ['doing', 'did', 'illdo']
    const router = useRouter()
    const catalogURI = (router.query.catalog ?? catalogTypes[0]) as string
    const userURI = router.query.user as string
    const { title, subtitle } = getTitle(catalogURI)

    const [loadContent, setLoadContent] = useState(true)
    const store = useCatalogStore(state => state)
    // const list = store.data[catalog]

    useEffect(() => {
        getData()
    }, [router])

    async function getData(): Promise<void> {
        try {
            setLoadContent(true)
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
            store.setData(list, catalogURI)
        } catch (e) {
            console.log(e)
            router.push('404')
        } finally {
            setLoadContent(false)
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <Struct
                titleSEO="Star List | My List"
                descriptionSEO="See all of your memories about movies, series, animations, books and games"
            >
                <Menu />
                {loadContent ? (
                    <LoadingStruct />
                ) : (
                    <DragAndDropList title={title} description={subtitle} />
                )}
            </Struct>
        </DndProvider>
    )
}

export default Catalog
