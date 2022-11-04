import type { NextPage } from 'next'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { Struct } from 'structure/Struct/System'
import { ErrorSection } from 'sections/Error'
import { useCatalogStore } from 'store/catalog'
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { DragAndDropList } from 'sections/List/Drag'
import { getCatalogList } from 'firebase/catalog/getList'
import { getTitle } from 'sections/List/components/getTitle'
import { useSetUtils } from 'structure/Utils/types'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const DnDProvide = ({ children }: { children: ReactNode }): ReactElement => (
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
)

const Catalog: NextPage = () => {
    const router = useRouter()
    const query = router.query.type as string
    const { setContentLoadState } = useSetUtils()
    const auth = getAuth()
    const id = auth.currentUser?.uid as string
    const { title, subtitle } = getTitle(query)
    const store = useCatalogStore(state => state)
    const list = store.data[query]

    useEffect(() => {
        if (list && !list.length) getData()
    }, [query])

    async function getData(): Promise<void> {
        const get = await getCatalogList(query, id)
        if (get) store.setData(get.list, query)
    }

    if (!list) return <ErrorSection />
    return (
        <DnDProvide>
            <Struct
                titleSEO="Star List | My List"
                descriptionSEO="See all of your memories about movies, series, animations, books and games"
            >
                <DragAndDropList title={title} description={subtitle} />
            </Struct>
        </DnDProvide>
    )
}

export default Catalog
