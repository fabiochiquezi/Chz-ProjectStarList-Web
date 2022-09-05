import type { NextPage } from 'next'
import Hero from '../../sections/Hero/Hero'
import List from '../../sections/List'
import Header from '../../sections/Header/Header'
import { getFireDoc } from '../../firebase/firestore/get'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loading from '../../components/Loading'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useCatalogStore } from '../../store/catalogStore'
import { getTitle } from './getTitle'
import Footer from '../../sections/Footer'

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
    const [error, setError] = useState(false)

    useEffect(() => {
        if (list && !list.length) getData()
    }, [query])

    async function getData() {
        try {
            const data = await getFireDoc(query, id)
            store.setData(data.list, query)
        } catch (e) {
            setError(true)
            console.log(e)
        } finally {
            setLoadingPage(false)
        }
    }

    if (is404) {
        router.push('/404')
        return <Loading />
    }
    if (error) {
        return (
            <div>
                <Header />
                <div className="relative h-[600px] w-full">
                    <p className="text-red-600 text-2xl pt-[200px] max-w-[300px] mx-auto text-center">
                        <span className="text-5xl mb-6 font-bold inline-block">
                            ERROR ;(
                        </span>
                        <br />
                        Sorry, but something went wrong
                    </p>
                </div>
                <Footer />
            </div>
        )
    }

    if (loadingPage) return <Loading />
    return (
        <>
            <Head>
                <title>Star List | Catalog</title>
                <meta
                    name="description"
                    content="See all of your memories about movies, series, animations, books and games"
                />
            </Head>

            <Header />

            <div className="mb-48 sm:mb-36 lg:mb-24">
                {/*<Hero
                    title="Lionsgate Movies"
                    description="Lionsgate’s feature film production and distribution
                        operation encompasses a diverse slate of tentpoles,
                        star-driven event films and branded properties"
                />*/}
                <div className="pb-32 md:pb-28 pt-28 md:pt-32 lg:pt-36">
                    <List title={title} description={subtitle} catalog={list} />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Catalog
