import type { NextPage } from 'next'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { Struct } from 'structure/Struct'
import { ErrorSection } from 'sections/Error'
import { useCatalogStore } from 'store/catalog'
import React, { useEffect, useState } from 'react'
import { DragAndDropList } from 'sections/List/Drag'
import { getCatalogList } from 'firebase/catalog/getList'
import { getTitle } from 'sections/List/components/getTitle'
import { useSetUtils } from 'structure/Utils/types'

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
        <Struct
            titleSEO="Star List | My List"
            descriptionSEO="See all of your memories about movies, series, animations, books and games"
        >
            <DragAndDropList title={title} description={subtitle} />
        </Struct>
    )
}

export default Catalog
