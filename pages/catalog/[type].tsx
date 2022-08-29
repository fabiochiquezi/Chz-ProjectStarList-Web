import type { GetServerSideProps, NextPage } from 'next'
import { catalogI } from '../../general/types/catalog'
import Hero from '../../sections/Hero/Hero'
import List from '../../sections/List'
import Header from '../../sections/Header/Header'
import { getFireDoc } from '../../firebase/firestore/get'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loading from '../../components/Loading'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import SpinIcon2 from '../../public/icons/SpinIcon2'

interface props {
    data?: catalogI[]
    ok?: boolean
    error?: Error
}

const Catalog: NextPage<props> = () => {
    const [data, setData] = useState<catalogI[] | null>(null)
    const router = useRouter()
    const auth = getAuth()

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const id = auth.currentUser?.uid as string
            const query = router.query.type as string
            const data = await getFireDoc(query, id)
            setData(data.list as catalogI[])
        } catch (e) {
            router.push('/404')
        }
    }

    if (!data) {
        return (
            <div>
                <Header />
                <Loading />
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Star List | Catalog</title>
                <meta
                    name="description"
                    content="See all of memories about movies, series, animations, books and games"
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
                    <List
                        title="NEW & UPCOMING MOVIES"
                        description="Exciting, emotional and unexpected"
                        catalog={data}
                    />
                </div>
            </div>
        </>
    )
}

export default Catalog
