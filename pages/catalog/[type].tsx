import Head from 'next/head'
import type { NextPage } from 'next'
import { Footer } from 'sections/Footer'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { ErrorSection } from 'sections/Error'
import { Header } from 'sections/Header/System'
import React, { useEffect, useState } from 'react'
import { DragAndDropList } from 'sections/List/Drag'
import { useCatalogStore } from 'store/catalog'
import { getCatalogList } from 'firebase/catalog/getList'
import { getTitle } from 'sections/List/components/getTitle'
import { LoadingStruct } from 'components/Structure/Loadings/Default'

const HeadData = (): React.ReactElement => (
    <Head>
        <title>Star List | Catalog</title>
        <meta
            name="description"
            content="See all of your memories about movies, series, animations, books and games"
        />
    </Head>
)

const Catalog: NextPage = () => {
    const router = useRouter()
    const query = router.query.type as string
    const auth = getAuth()
    const id = auth.currentUser?.uid as string
    const { title, subtitle } = getTitle(query)
    const store = useCatalogStore(state => state)
    const list = store.data[query]
    const is404 = list === undefined || list === null
    const [loadContent, seLoadContent] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        seLoadContent(true)
        if (list && !list.length) getData()

        setTimeout(() => {
            seLoadContent(false)
        }, 600)
    }, [query])

    function getData(): void {
        getCatalogList(query, id)
            .then(data => {
                if (data) store.setData(data.list, query)
            })
            .catch(() => setError(true))
    }

    if (is404) {
        router
            .push('/404')
            .then(() => {
                console.log('get 404')
            })
            .catch(() => <ErrorSection />)
    }
    if (error) return <ErrorSection />

    return (
        <>
            <HeadData />
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                {loadContent ? (
                    <LoadingStruct />
                ) : (
                    <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                        <DragAndDropList title={title} description={subtitle} />
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Catalog
