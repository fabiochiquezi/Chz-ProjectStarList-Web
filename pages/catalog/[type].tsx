import type { NextPage } from 'next'
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

function getTitle(query: string) {
    switch (query) {
        case 'doing':
            return {
                title: "All works I'm following",
                subtitle: 'Exciting, emotional and unexpected'
            }
        case 'illdo':
            return {
                title: 'Works that I need to see',
                subtitle: 'Exciting, emotional and unexpected'
            }
        case 'did':
            return {
                title: "All works I've completed",
                subtitle: 'Exciting, emotional and unexpected'
            }
        default:
            return {
                title: 'All the works I"m following',
                subtitle: 'Exciting, emotional and unexpected'
            }
    }
}

const Catalog: NextPage = () => {
    const [data, setData] = useState<catalogI[] | null>(null)
    const router = useRouter()
    const query = router.query.type as string
    const auth = getAuth()
    const id = auth.currentUser?.uid as string
    const { title, subtitle } = getTitle(query)
    useEffect(() => {
        getData()
    }, [router.asPath])

    async function getData() {
        try {
            const data = await getFireDoc(query, id)
            setData(data.list as catalogI[])
        } catch (e) {
            console.log(e)
            router.push('/404')
        }
    }

    if (data === null) {
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
                    <List title={title} description={subtitle} catalog={data} />
                </div>
            </div>
        </>
    )
}

export default Catalog
