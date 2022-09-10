import Head from 'next/head'
import List from 'sections/List'
import type { NextPage } from 'next'
import Footer from 'sections/Footer'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import ErrorSection from 'sections/Error'
import Header from 'sections/Header/Header'
import React, { useEffect, useState } from 'react'
import Loading from 'components/Structure/Loading'
import { getFireDoc } from 'firebase/firestore/get'
import { useCatalogStore } from 'store/catalogStore'
import { DocumentData } from 'firebase/firestore'
import { getTitle } from 'general/functions/getTitle'

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
    const [loadingPage, setLoadingPage] = useState(true)
    const [loadContent, seLoadContent] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        seLoadContent(true)
        if (list && !list.length) getData()
        setTimeout(() => {
            seLoadContent(false)
        }, 600)
    }, [query])

    async function getData(): Promise<void> {
        try {
            const data = (await getFireDoc(query, id)) as DocumentData
            store.setData(data.list, query)
        } catch (e) {
            setError(true)
        } finally {
            setLoadingPage(false)
        }
    }

    if (is404) router.push('/404')
    if (error) return <ErrorSection />
    if (loadingPage) return <Loading />

    return (
        <>
            <HeadData />
            <Header />
            <div className="mb-48 sm:mb-36 lg:mb-24">
                {/* <Hero
                    title="Lionsgate Movies"
                    description="Lionsgate’s feature film production and distribution
                        operation encompasses a diverse slate of tentpoles,
                        star-driven event films and branded properties"
                /> */}

                {loadContent ? (
                    <Loading />
                ) : (
                    <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                        <List
                            title={title}
                            description={subtitle}
                            catalog={list}
                        />
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default Catalog
