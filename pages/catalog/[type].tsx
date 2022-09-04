import type { NextPage } from 'next'
import Hero from '../../sections/Hero/Hero'
import List from '../../sections/List'
import Header from '../../sections/Header/Header'
import { getFireDoc } from '../../firebase/firestore/get'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loading from '../../components/Loading'
import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
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

    useEffect(() => {
        if (list && !list.length) getData()
    }, [query])

    async function getData() {
        try {
            const data = await getFireDoc(query, id)
            store.setData(data.list, query)
        } catch (e) {
            console.log(e)
        }
    }

    if (!list) router.push('/404')
    if (!list || !list.length) return <Loading />

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
